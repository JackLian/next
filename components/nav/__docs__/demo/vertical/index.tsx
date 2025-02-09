import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Radio } from '@alifd/next';

const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        type: 'normal',
    };

    changeType = type => {
        this.setState({
            type,
        });
    };

    render() {
        const { type } = this.state;

        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group
                        shape="button"
                        size="medium"
                        value={type}
                        onChange={this.changeType}
                    >
                        <Radio value="normal">type="normal"</Radio>
                        <Radio value="primary">type="primary"</Radio>
                        <Radio value="secondary">type="secondary"</Radio>
                        <Radio value="line">type="line"</Radio>
                    </Radio.Group>
                </div>
                <Nav style={{ width: '200px' }} type={type} defaultOpenAll>
                    <Item icon="account">Navigation One</Item>
                    <Item icon="account">Navigation Two</Item>
                    <Item disabled icon="account">
                        Navigation Three
                    </Item>
                    <Item icon="account">Navigation Four</Item>
                    <Item icon="account">Navigation Five</Item>
                    <SubNav disabled icon="account" label="Sub Nav">
                        <Item icon="account">Item 1</Item>
                        <Item icon="account">Item 2</Item>
                        <Item icon="account">Item 3</Item>
                        <Item icon="account">Item 4</Item>
                    </SubNav>
                </Nav>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
