import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import './Menu.css';

class AppMenu extends Component {
    constructor() {
        super();
        this.state = { current: 'generate' };
    }

    handleClick = (e) => {
        this.setState({ current: e.key },
            () => this.props.handler(e.key)
        );
    }

    render() {
        return (
            <div className="menu-container">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item href="#generate-wallet" key="generate">
                        <Icon type="wallet" />New Wallet(s)
                    </Menu.Item>

                    <Menu.Item key="swap" disabled>
                        <Icon type="swap" />Swap
                    </Menu.Item>

                    <Menu.Item key="find" disabled>
                        <Icon type="search" />Retrieve from Mnemonic
                    </Menu.Item>

                    <Menu.Item key="balance" disabled>
                        <Icon type="eye-o" />View Wallet Info
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default AppMenu;