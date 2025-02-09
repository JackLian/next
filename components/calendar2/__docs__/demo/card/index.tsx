import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';

function onDateChange(value) {
    console.log(value);
}

ReactDOM.render(
    <div className="wrapped-calendar">
        <Calendar2 onSelect={onDateChange} shape="card" />
    </div>,
    mountNode
);
