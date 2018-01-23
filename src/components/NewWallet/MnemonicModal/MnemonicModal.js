import React, { Component } from 'react';
import { Modal, Button, Icon, Input, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import PassphraseCheckedModal from '../../Modals/PassphraseCheckedModal';

const { confirm } = Modal;

class MnemonicModal extends Component {
    constructor(props) {
        super(props);
    }

    handleDismiss = () => {
        this.props.setVisible(false, () => {
            this.props.handleDismiss();
        });
    }

    handleCancel = () => {
        console.log('cancelled!');
    }

    handleCopy = () => {
        message.success('Copied!')
    }

    render() {
        return (
            <div>
            <PassphraseCheckedModal
                title="Here is your secret mnemonic. It can be used to recover your wallet's information."
                okText="Yep, I know it by heart"
                modalType={{icon: 'exclamation-circle', color: '#faad14'}}
                visible={this.props.visible}
                onOK={this.handleDismiss}
            >
                <p>It is very important to ensure ownership of your Bitcoins to keep this somewhere safe.</p>
                <pre style={{
                    whiteSpace: 'normal',
                    padding: 20,
                    background: '#f1f1f1',
                    fontFamily: 'monospace',
                    fontSize: 15,
                    textAlign: 'center',
                    margin: 0,
                }}>
                    {this.props.mnemonic}
                </pre>

                <CopyToClipboard onCopy={this.handleCopy} text={this.props.mnemonic}>
                    <Button icon="copy">
                        Copy
                    </Button>
                </CopyToClipboard>

                <p style={{marginTop: 10}}>
                    We want to make sure you understand the dangers and risks of not keeping this mnemonic somewhere safe.
                </p>
            </PassphraseCheckedModal>

            </div>
        );
    }
}

export default MnemonicModal;