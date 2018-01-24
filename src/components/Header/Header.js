import React, { Component } from 'react';
import { Layout, Row } from 'antd';

import BTCconvert from '../BTCconvert/BTCconvert';
import Logo from '../../assets/images/btcwalletgen.svg';
import './Header.css';

const { Header } = Layout;


class AppHeader extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="header-container" style={{background: 'red'}}>
                <Header>
                    <Row type="flex" justify="space-between">
                        <div className="logo">
                            <img src={Logo} alt="BTCwalletGen logo"/>
                        </div>
                        <BTCconvert></BTCconvert>
                    </Row>
                </Header>
            </div>
        );
    }
}

export default AppHeader;