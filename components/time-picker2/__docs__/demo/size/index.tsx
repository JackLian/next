import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimePicker2 } from '@alifd/next';

ReactDOM.render(
    <div>
        <TimePicker2 size="large" />
        <br />
        <br />
        <TimePicker2 />
        <br />
        <br />
        <TimePicker2 size="small" />
    </div>,
    mountNode
);
