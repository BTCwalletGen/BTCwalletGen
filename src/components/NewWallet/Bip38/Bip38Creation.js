import React, { Component } from 'react';
import { Input, Icon, Button, Spin } from 'antd';

import Bip38Password from './Bip38Password';

const bitcoin = require('bitcoinjs-lib');
const bigi = require('bigi');
const crypto = require('crypto');
const bip39 = require('bip39');
const bip38 = require('bip38');
const wif = require('wif');

class Bip38Creation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: {active: true },
            loading: false,
        };
    }

    handlePasswordEntered = (pwd) => {
        this.setState({
            loading: true
        }, this.genBip38Wallet(pwd));
        //     console.log('new state,', this.state);
        //     this.genBip38Wallet(pwd);
        // });
    }

    genBip38Wallet = (pwd) => {
        try {
            const bitcoinNetwork = bitcoin.networks.bitcoin;
            const keyPair = bitcoin.ECPair.makeRandom({network: bitcoinNetwork, rng: () => Buffer.from(crypto.randomBytes(32))});
            const privateKey = keyPair.toWIF();
            const address = keyPair.getAddress();
            const decoded = wif.decode(privateKey);

            setTimeout(() => {
                const encrypted = bip38.encrypt( decoded.privateKey, decoded.compressed, pwd);
                this.handleDone({address, encryptedKey: encrypted});
            }, 100);
        } catch (err) {
            this.handleBip38WalletError(err);
        }
    }

    handleDone = (newWallet) => {
        this.setState({loading: false}, () => {
            this.props.onDone(newWallet);
        });
    }

    handleBip38WalletError = (err) => {
        // do something...
    }

    render() {
        const { password, loading } = this.state;
        return (
            <Spin tip="Encrypting..." spinning={loading} style={{zIndex: 10}} size="large" >
                <Bip38Password style={{textAlign: 'center'}} onProceed={this.handlePasswordEntered} />
            </Spin>
        );
    }
}

export default Bip38Creation;