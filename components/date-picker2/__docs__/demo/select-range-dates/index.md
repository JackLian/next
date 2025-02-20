# zh-CN order=4

# 选择不超过七天的范围

使用 onCalendarChange 和 disabledDate 来限制动态的日期区间选择。

```jsx
import { useState } from 'react';
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

const App = () => {
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const disabledDate = current => {
        if (!dates) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
        return !!tooEarly || !!tooLate;
    };

    return (
        <RangePicker
            value={dates || value}
            disabledDate={disabledDate}
            onCalendarChange={val => {
                setDates(val);
            }}
            onChange={val => {
                setValue(val);
            }}
        />
    );
};

ReactDOM.render(<App />, mountNode);
```

# en-US order=4

# Select range dates in 7 days

Using onCalendarChange and disabledDate to limit date selection.
