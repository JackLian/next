import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import { ParagraphProps } from './types';

/** Paragraph */
class Paragraph extends React.Component<ParagraphProps> {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 额外的样式名 会附加到 root dom 上
         */
        className: PropTypes.string,
        /**
         * 什么方式展示段落
         * - 'long' :  展示所有文本
         * - 'short' : 展示三行以内（非强制）
         */
        type: PropTypes.oneOf(['long', 'short']),
        /**
         * 组件大小。
         * - 'medium' : 中号
         * - 'short' : 小号
         */
        size: PropTypes.oneOf(['medium', 'small']),
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        type: 'long',
        size: 'medium',
    };

    constructor(props: ParagraphProps) {
        super(props);
        log.warning('[Paragraph] is deprecated, please use Typography.Paragraph instead!');
    }

    render() {
        const { prefix, className, type, size, rtl, ...others } = this.props;

        const cls = classNames(
            `${prefix}paragraph`,
            type === 'short' ? `${prefix}paragraph-short` : `${prefix}paragraph-long`,
            size === 'small' ? `${prefix}paragraph-small` : `${prefix}paragraph-medium`,
            className
        );
        if (rtl) {
            others.dir = 'rtl';
        }

        return (
            <div {...others} className={cls}>
                {this.props.children}
            </div>
        );
    }
}

export type { ParagraphProps };

export default ConfigProvider.config(Paragraph);
