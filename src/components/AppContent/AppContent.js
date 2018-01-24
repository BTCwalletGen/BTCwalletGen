import React, { Component } from 'react';
import { Layout } from 'antd';

import NewWallet from '../NewWallet/NewWallet';
import Swap from '../Swap/Swap';

const { Content } = Layout;

class AppContent extends Component {
    SwapComponent = <Swap/>;
    constructor(props) {
        super(props);
        this.state = {
            current: props.menuItem
        };
    }

    currentComponent = () => {
        switch (this.props.menuItem) {
            // case 'swap':
            //     return this.SwapComponent;
            //     break;
            default:
                return <NewWallet className="printable" />;
        }
    }

    render() {
        let Component = this.currentComponent();
        return (
            <Content className="printable">
                {Component}
            </Content>
        );
    }
}

export default AppContent;