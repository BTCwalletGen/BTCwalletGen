import React, { Component } from 'react';
import { Button, Icon, Row } from 'antd';
import { setTimeout } from 'timers';

import './NewWallet.css';
import BoxContainer from '../ui/BoxContainer';
import MnemonicModal from './MnemonicModal/MnemonicModal';
import WalletTicket from '../WalletTicket/WalletTicket';
import PassphraseCheckedModal from '../Modals/PassphraseCheckedModal';
import Bip38Creation from './Bip38/Bip38Creation';

const bitcoin = require('bitcoinjs-lib');
// const bigi = require('bigi');
const crypto = require('crypto');
const bip39 = require('bip39');

class NewWallet extends Component {
    constructor() {
        super();
        this.state = {
            mnemonic: '',
            wallet: {},
            newWalletEngaged: false,
            readyToClearWallet: false,
            newWalletState: {
                walletType: { active: false },
                mnemonic: { active: false, loading: false, modal: false },
                bip38: { active: false },
                result: { active: false },
            }
        };
    }

    generateMnemonicWallet = () => {
        // const randomBytes = Buffer.from([92, 201, 167, 188, 176, 187, 201, 15, 98, 47, 145, 99, 215, 58, 164, 241]);
        const randomBytes = crypto.randomBytes(16);
        const mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'));
        const seed = bip39.mnemonicToSeed(mnemonic);
        const bitcoinNetwork = bitcoin.networks.bitcoin;
        const hdMaster = bitcoin.HDNode.fromSeedBuffer(seed, bitcoinNetwork);
        const key = hdMaster.derivePath(`m/39/0'/0/0'`);

        let newWallet = {
            type: 'mnemonic',
            address: key.keyPair.getAddress(),
            key: key.keyPair.toWIF(),
            mnemonic: mnemonic
        };
        return newWallet;
    }

    handlePrint = () => {
        window.print();
    }

    handleCreateNewWallet = () => {
        if (this.state.newWalletState.result.active) {
            this.verifyBeforeCreatingNewWallet();
            return;
        }

        this.setState((prevState) => {
            const newWS = prevState.newWalletState;
            newWS.walletType = !newWS.walletType.active && !prevState.newWalletEngaged
                ? { active: true } : { active: false };

            return {
                newWalletEngaged: true,
                newWalletState: newWS,
            };
        });
    }

    verifyBeforeCreatingNewWallet = () => {
        this.setState({
            readyToClearWallet: true,
        });
    }

    handleResetWallet = () => {
        this.setState((prevState) => {
            prevState.newWalletState.result.active = false;
            return {
                readyToClearWallet: false,
            };
        }, () => this.handleCreateNewWallet());
    }

    handleCancelWalletReset = () => {
        this.setState((prevState) => {
            return {
                readyToClearWallet: false
            };
        });
    }

    handleCreateRegularWallet = () => {
        this.setState((prevState) => {
            prevState.newWalletState.mnemonic = { active: true, loading: true, modal: false };
            return { newWalletState: prevState.newWalletState };
        }, () => {
            const newWallet = this.generateMnemonicWallet();
            setTimeout(() => {
                this.setState((prevState) => {
                    prevState.newWalletState.walletType.active = false;
                    prevState.newWalletState.mnemonic = { active: false, loading: false, modal: true };
                    return {
                        wallet: newWallet,
                        newWalletState: prevState.newWalletState 
                    };
                });
            }, 850);
        });
    }

    /**
     * Set state in order to display Mnemonic modal
     */
    handleMnemonicModal = (isVisible, callback) => {
        this.setState((prevState) => {
            prevState.newWalletState.mnemonic.modal = isVisible;
            return { newWalletState: prevState.newWalletState };
        }, () => {
            if (typeof callback === 'function') {
                console.log('should execute callback');
                callback();
            } else {
                console.log('not executing callback()');
            }
        });
    }

    /**
     * Handle closure of the Mnemonic modal
     */
    handleMnemonicModalDismiss = () => {
        this.setState((prevState) => {
            prevState.newWalletState.mnemonic.active = false;
            prevState.newWalletState.result.active = true;
            return {
                newWalletEngaged: false,
                newWalletState: prevState.newWalletState
            };
        });
    }
    
    handleCreateBip38Wallet = () => {
        this.setState((prevState) => {
            prevState.newWalletState.walletType.active = false;
            prevState.newWalletState.bip38.active = true;
            return prevState;
        });
    }

    handleNewBip38WalletResult = ({address, encryptedKey}) => {
        this.setState((prevState) => {
            prevState.newWalletEngaged = false;
            prevState.newWalletState.bip38.active = false;
            prevState.newWalletState.result.active = true;
            prevState.wallet = {
                type: 'bip38',
                key: encryptedKey,
                address
            };
            return prevState;
        });
    }
    
    render() {
        const {
            newWalletEngaged,
            readyToClearWallet,
            newWalletState, 
            wallet
        } = this.state;

        return (
            <BoxContainer className="printable">
                <Row type="flex" justify="space-between">
                    <Button
                        type="primary"
                        size="large"
                        onClick={this.handleCreateNewWallet}
                        disabled={newWalletEngaged}
                    >New Wallet</Button>

                    <Button
                        className="plain"
                        size="large"
                        onClick={this.handlePrint}
                        disabled={!newWalletState.result.active}
                    ><Icon type="printer"/>Print</Button>
                </Row>

                { newWalletEngaged && newWalletState.walletType.active ? 
                    <div className="new-wallet-engaged" style={{ textAlign: 'center' }}>
                        <h1>I want to...</h1>
                            <Button
                                className="plain"
                                size="large"
                                onClick={this.handleCreateRegularWallet}
                                loading={newWalletState.mnemonic.loading}
                            >Create regular wallet</Button>
                            <br/>
                            <Button
                                className="plain"
                                size="large"
                                onClick={this.handleCreateBip38Wallet}
                            >Create Bip38 encrypted wallet</Button>
                    </div>
                :''}

                {newWalletState.bip38.active ?
                    <Bip38Creation
                        style={{ textAlign: 'center' }}
                        onDone={this.handleNewBip38WalletResult}
                    />

                :''}

                {newWalletState.mnemonic.modal ?
                    <MnemonicModal
                        visible={newWalletState.mnemonic.modal}
                        setVisible={this.handleMnemonicModal}
                        handleDismiss={this.handleMnemonicModalDismiss}
                        mnemonic={wallet.mnemonic}
                    ></MnemonicModal>
                :''}

                {readyToClearWallet && newWalletState.result.active ? 
                    <PassphraseCheckedModal
                        title="You're about to erase the last generated wallet, are you sure?"
                        okText="Continue"
                        modalType={{icon: 'question-circle', color: '#fa1a14'}}
                        visible={readyToClearWallet}
                        onOK={this.handleResetWallet}
                        cancelable={true}
                        onCancel={this.handleCancelWalletReset}
                    >
                        <p>We need to make sure you totally understand and know the risks.</p>
                        <p>You can always cancel, print the wallet and try again.</p>
                    </PassphraseCheckedModal>
                :''}

                {newWalletState.result.active ?
                    <div className="printable" id="qr-codes">
                        <WalletTicket className="printable" wallet={wallet} />
                    </div>
                :''}
            </BoxContainer>
        );
    }
}

export default NewWallet;