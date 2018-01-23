import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';

import './Bip38Password.css';

class Bip38Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordRevealed: false,
            passwordOk: false,
            passwordTouched: false,
        };
        this.pwd = null;
    }

    handlePasswordReveal = () => {
        this.setState((prevState) => ({
            passwordRevealed: !prevState.passwordRevealed

        }));
    }

    handlePasswordChange = (e) => {
        let passwordOk = false;
        this.pwd = e.target.value;
        // Passwords needs to be at least `8 chars length`
        if (this.pwd.length >= 8) {
            passwordOk = true;
        }
        this.setState((prevState) => {
            prevState.passwordOk = passwordOk;
            return prevState;
        })
    }

    handlePasswordBlur = () => {
        if (!this.state.passwordTouched) {
            this.setState((prevState) => {
                prevState.passwordTouched = true;
                return prevState;
            });
        }
    }

    handleProceed = () => {
        if (this.state.passwordOk) {
            this.props.onProceed(this.pwd);
        }
    }

    render() {
        const { passwordRevealed, passwordOk, passwordTouched } = this.state;
        const pwdIcon = <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', fontSize: '1.25rem' }} />;
        const pwdReveal =
            <Icon
                type={passwordRevealed ? 'eye' : 'eye-o'}
                onClick={this.handlePasswordReveal}
                style={{cursor: 'pointer', width: 50, fontSize: '1.25rem'}}
            />
        return (
            <div style={this.props.style} className={passwordTouched && !passwordOk ? 'has-error' : ''}>
                <h1>Enter your password</h1>
                <p
                    style={{
                        fontSize: '1.25rem',
                        color: '#ffb700',
                        maxWidth: 280,
                        margin: '0 auto 20px',
                    }}
                >
                    <Icon type="exclamation-circle"/>&nbsp;
                    Keep it somewhere safe, you could lose all your bitcoins.
                </p>

                <Input
                    className="pwd-input"
                    prefix={pwdIcon}
                    addonAfter={pwdReveal}
                    onChange={this.handlePasswordChange}
                    onBlur={this.handlePasswordBlur}
                    type={passwordRevealed ? 'text' : 'password'}
                    style={{
                        maxWidth: 460,
                        display: 'block',
                        margin: '0 auto',
                        height: 50,
                        fontSize: '1.25rem',
                        textAlign: 'center',
                    }}
                />
                <p
                    className="ant-form-explain"
                    style={{
                        display: passwordTouched && !passwordOk ? 'block' : 'none'
                    }}
                >Your password should be at least 8 characters long.</p>

                <Button
                    type="primary"
                    size="large"
                    onClick={this.handleProceed}
                    disabled={!passwordOk}
                    style={{marginTop: 20}}
                >Proceed</Button>
            </div>
        );
    }
}

export default Bip38Password;