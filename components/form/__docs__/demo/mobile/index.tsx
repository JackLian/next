import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, Input, Checkbox, Switch, Radio } from '@alifd/next';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        fixedSpan: 10,
    },
    wrapperCol: {
        span: 14,
    },
};

class Demo extends React.Component {
    state = {
        device: 'desktop',
    };

    handleDeviceChange = device => {
        this.setState({
            device,
        });
    };

    render() {
        return (
            <div>
                <Radio.Group
                    shape="button"
                    value={this.state.device}
                    onChange={this.handleDeviceChange}
                >
                    <Radio value="desktop">desktop</Radio>
                    <Radio value="phone">phone</Radio>
                </Radio.Group>
                <hr />
                <Form style={{ width: '60%' }} {...formItemLayout} device={this.state.device}>
                    <FormItem label="Username:">
                        <p>Fixed Name</p>
                    </FormItem>
                    <FormItem label="password:" name="basePass">
                        <Input htmlType="password" placeholder="Please Enter Password" />
                    </FormItem>
                    <FormItem label="Note:" help="something" name="baseRemark">
                        <Input.TextArea placeholder="something" />
                    </FormItem>
                    <FormItem label="Agreement:" name="baseAgreement">
                        <Checkbox defaultChecked>Agree</Checkbox>
                    </FormItem>
                    <FormItem label=" ">
                        <Form.Submit>Confirm</Form.Submit>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
