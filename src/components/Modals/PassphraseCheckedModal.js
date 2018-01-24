import React, { Component } from 'react';
import { Modal, Button, Icon, Input } from 'antd';

import { MNEMONICS_SAFETY_SENTENCES } from '../../constants';

class PassphraseCheckedModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dismissDisabled: true,
            safety_words: '',
        };
    }

    componentWillMount = () => {
        const safety_words = MNEMONICS_SAFETY_SENTENCES[
            Math.floor(Math.random() * MNEMONICS_SAFETY_SENTENCES.length - 1) + 1
        ];
        this.setState({ safety_words, dismissDisabled: true });
    }

    handleDismiss = () => {
        this.props.onOK();
    }

    handleCancel = () => {
        this.props.onCancel();
    }

    handlePassphraseChange = (e, safety_words) => {
        if (e.target.value.toLowerCase() === safety_words.toLowerCase()) {
            this.setState({ dismissDisabled: false });
        } else if (!this.state.dismissDisabled) {
            this.setState({ dismissDisabled: true });
        }
    }

    render() {
        const { dismissDisabled, safety_words } = this.state;
        const { visible, okText, modalType, title, cancelable } = this.props;

        return (
            <div>
            <Modal
                visible={visible}
                onOk={this.handleDismiss}
                maskClosable={false}
                closable={false}
                footer={[
                    <Button
                        key="cancel"
                        className={!cancelable ? 'plain': ''}
                        type={cancelable ? 'primary': ''}
                        size="large"
                        style={{ display: !cancelable ? 'none': 'inline-block' }}
                        disabled={!cancelable}
                        onClick={this.handleCancel}
                    >
                        <span>Cancel</span>
                    </Button>,
                    <Button
                        key="dismiss"
                        className={cancelable ? 'plain': ''}
                        type={!cancelable ? 'primary': ''}
                        size="large"
                        disabled={dismissDisabled}
                        onClick={this.handleDismiss}
                    >
                        <span>{okText}</span>
                    </Button>                    
                ]}
            >
                <h2 style={{ marginLeft: 35 }}>
                    <Icon type={modalType.icon} style={{
                        color: modalType.color,
                        position: 'absolute',
                        fontSize: '4rem',
                        left: -13,
                        top: -12,
                    }} />
                    {title}
                </h2>

                {this.props.children}

                <p>Please enter&nbsp;
                    <span style={{
                        color: '#f06415',
                        fontWeight: 600,
                        padding: '3px 10px',
                        background: '#ffe6d6',
                    }}
                    >{safety_words}</span>&nbsp; 
                    in the input below if you wish to proceed.
                </p>

                <Input onChange={(e) => this.handlePassphraseChange(e, safety_words)} placeholder="Enter passphrase"/>

            </Modal>
            </div>
        );
    }
}

export default PassphraseCheckedModal;