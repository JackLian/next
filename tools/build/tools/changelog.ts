import * as path from 'path';
import * as fs from 'fs-extra';
import * as semver from 'semver';
import * as inquirer from 'inquirer';
import conventionalChangelog from 'conventional-changelog';
import config from 'conventional-changelog-alifd';
import { CWD, log, querySync, warn } from '../../utils';

const changelogPath = 'CHANGELOG.md';
const latestedLogPath = 'LATESTLOG.md';

function updateVersion(version: string, type = 'z', addend = 1) {
    if (!semver.valid(version)) {
        return version;
    }

    const versionArr: Array<string | number> = version.split('.');

    switch (type) {
        case 'x':
            versionArr[2] = 0;
            versionArr[1] = 0;
            versionArr[0] = parseInt(versionArr[0] as string) + 1;
            break;
        case 'y':
            versionArr[2] = 0;
            versionArr[1] = parseInt(versionArr[1] as string) + 1;
            break;
        default:
            versionArr[2] = parseInt(versionArr[2] as string) + addend;
    }

    return versionArr.join('.');
}

export async function changelog() {
    const packagePath = path.resolve('package.json');

    const packageInfo = fs.readJSONSync(packagePath);

    // const npmInfo = yield getRemotePkgInfo();

    const npmVersion = querySync('npm', ['show', packageInfo.name, 'version']);
    log(`[提示] [local:${packageInfo.version}] [npm:${npmVersion}] 请为本次提交指定新的版本号:`);

    const current = await inquirer.prompt([
        {
            name: 'version',
            type: 'input',
            default: updateVersion(packageInfo.version, 'z'),
            message: '请输入待发布的版本号：',
            validate: function (value) {
                if (!semver.valid(value) || semver.lte(value, npmVersion)) {
                    warn('请输入正确的版本号，并且大于基线版本号！');
                    return false;
                }
                return true;
            },
        },
    ]);

    packageInfo.version = current.version;

    await fs.writeJson(packagePath, packageInfo, { spaces: 2 });

    log(`[提示] 回写版本号 ${packageInfo.version} 到 package.json success`);

    log(`正在生成 ${changelogPath} 文件，请稍等几秒钟...`);

    conventionalChangelog({
        config,
    }).on('data', (chunk: Buffer) => {
        const log = chunk.toString().replace(/(\n## [.\d\w]+ )\(([\d-]+)\)\n/g, (all, s1, s2) => {
            return `${s1}/ ${s2}\n`;
        });

        let changelogContent = fs.readFileSync(changelogPath, 'utf8');
        changelogContent = changelogContent.split('\n').slice(1).join('\n');
        fs.writeFileSync(changelogPath, `# Change Log \n\n${log}${changelogContent}`);

        const lines = log.split(/\n/g);
        let firstIndex = -1,
            secondIndex = -1;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (/^##? \[/.test(line)) {
                if (firstIndex === -1) {
                    firstIndex = i;
                } else if (secondIndex === -1) {
                    secondIndex = i;
                } else {
                    break;
                }
            }
        }

        if (firstIndex > -1) {
            secondIndex = secondIndex === -1 ? lines.length : secondIndex;
            const latestedLog = lines.slice(firstIndex, secondIndex - 1).join('\n');
            fs.writeFileSync(latestedLogPath, `# Latest Log \n\n${latestedLog}`);
        }
    });

    log(`成功将 ${changelogPath} 文件生成到 ${CWD} 目录下`);
}
