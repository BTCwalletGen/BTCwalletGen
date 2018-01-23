import React, { Component } from 'react';

import './WalletTicket.css';
const QRCode = require('qrcode-react');

class WalletTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { wallet } = this.props;

        return (
            <div className="wallet">
                <div className="sidebar"></div>
                <div className="content">
                    <div className="QRs">
                        <QRCode value={'bitcoin:' + wallet.address} size={256} logo="https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png" logoWidth={100} />
                        <p>Your Address</p>
                        <QRCode value={'bitcoin:' + wallet.key} size={256} logo="https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png" logoWidth={100} />
                        <p>Your Private Key</p>
                    </div>
                    <div className="addresses">
                        <div className="publicAddress">
                            <p>Your Address:</p>
                            <p>{wallet.address}</p>
                        </div>
                        <div className="privateAddress">
                            <p>Your Private Key{wallet.type === 'bip38' ? ' (Bip38 encrypted)': ''}:</p>
                            <p>{wallet.key}</p>
                        </div>
                    </div> {/* END addresses */}
                </div> {/* END content */}
            </div>
        );
    }
}

export default WalletTicket;