import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Select } from '@alifd/next';

const dataSource = [
    { value: '10001', label: 'Lucy King' },
    { value: 10002, label: 'Lily King' },
    { value: 10003, label: 'Tom Cat', disabled: true },
    {
        label: 'Special Group',
        children: [
            { value: -1, label: 'FALSE' },
            { value: 0, label: 'ZERO' },
        ],
    },
];

const ctrlDataSources = {
    mode: ['single', 'multiple', 'tag'],
    size: ['small', 'medium', 'large'],
    showSearch: [true, false],
    hasArrow: [true, false],
    hasBorder: [true, false],
    hasClear: [true, false],
};

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            size: undefined,
            mode: undefined,
            hasArrow: undefined,
            hasBorder: undefined,
            showSearch: undefined,
            hasClear: undefined,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCtrlChange = this.handleCtrlChange.bind(this);
    }

    handleCtrlChange(key, value) {
        this.setState({ [key]: value });

        if (key === 'mode') {
            this.setState({ value: null });
        }
    }

    handleChange(value, item) {
        console.log('handleChange: value: ', value, item);
        this.setState({ value });
    }

    renderCtrlNodes(state) {
        const ctrlNodes = [];
        let k;
        for (k in ctrlDataSources) {
            if (ctrlDataSources.hasOwnProperty(k)) {
                ctrlNodes.push(
                    <Select
                        key={k}
                        style={{ marginRight: 8 }}
                        label={`${k}: `}
                        value={state[k]}
                        id={k}
                        dataSource={ctrlDataSources[k]}
                        onChange={this.handleCtrlChange.bind(this, k)}
                    />
                );
            }
        }

        return ctrlNodes;
    }

    render() {
        return (
            <div style={{ padding: 16, background: '#F8F8F8' }}>
                <div style={{ padding: 12, marginBottom: 16, border: '2px dashed #ddd' }}>
                    {this.renderCtrlNodes(this.state)}
                </div>
                <Select
                    popupProps={{ v2: true }}
                    {...this.state}
                    onChange={this.handleChange}
                    dataSource={dataSource}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
