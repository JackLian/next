import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Upload, Button, Icon } from '@alifd/next';

const style = { display: 'inline-block', marginRight: 10 };
ReactDOM.render(
    <div style={{ display: 'flex' }}>
        <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            beforeUpload={beforeUpload}
            onChange={onChange}
            onSuccess={onSuccess}
            multiple
            defaultValue={[
                {
                    name: 'IMG.png',
                    state: 'done',
                    size: 1024,
                    downloadURL:
                        'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                },
            ]}
            style={style}
        >
            <Button type="primary" style={{ margin: '0 0 10px' }}>
                Upload File
            </Button>
        </Upload>

        <Upload shape="card" style={style}>
            Upload File
        </Upload>

        <Upload style={style}>
            <div className="next-upload-card">
                <Icon type="attachment" size="large" />
                <div className="next-upload-text">Attachment</div>
            </div>
        </Upload>
    </div>,
    mountNode
);

function beforeUpload(info) {
    console.log('beforeUpload : ', info);
}

function onChange(info) {
    console.log('onChange : ', info);
}

function onSuccess(info) {
    console.log('onSuccess : ', info);
}
