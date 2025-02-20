import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Timeline } from '@alifd/next';

const TimelineItem = Timeline.Item;
ReactDOM.render(
    <Timeline>
        <TimelineItem title="Receipt" state="process" />
        <TimelineItem title="Ship" />
        <TimelineItem title="Order" />
    </Timeline>,
    mountNode
);
