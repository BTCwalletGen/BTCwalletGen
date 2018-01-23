import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import './Menu.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AppMenu extends Component {
    constructor() {
        super();
        this.state = {
            current: 'generate'
        };
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
                    {/* <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu> */}
                    {/* <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                    </Menu.Item> */}
                </Menu>
            </div>
        );
    }
}

export default AppMenu;