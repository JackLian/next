import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimePicker2, Field, Button } from '@alifd/next';
import dayjs from 'dayjs';

class Demo extends React.Component {
    field = new Field(this);

    onClick = () => {
        const value = this.field.getValue('time-picker');
        console.log(value.format('HH:mm:ss'));
    };

    render() {
        const { init } = this.field;

        const props = init('time-picker', {
            rules: [{ required: true, message: 'Time Required' }],
            initValue: dayjs('00:00:00', 'HH:mm:ss', true),
        });

        return (
            <div>
                <TimePicker2 {...props} /> <br />
                <br />
                <Button onClick={this.onClick}>Print Value in Console</Button>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
