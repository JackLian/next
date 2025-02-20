import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimePicker } from '@alifd/next';

const renderTimeMenuItems = list => {
    return list.map(({ label, value }) => {
        return {
            value,
            label: value > 9 ? String(value) : `0${value}`,
        };
    });
};

ReactDOM.render(<TimePicker renderTimeMenuItems={renderTimeMenuItems} />, mountNode);
