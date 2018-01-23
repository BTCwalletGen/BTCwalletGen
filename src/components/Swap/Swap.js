import React, { Component } from 'react';
import { Row } from 'antd';

class Swap extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Row
                align="middle"
                type="flex"
                justify="center"
            >
                <iframe
                    title="changelly"
                    src="https://changelly.com/widget/v1?auth=email&from=BTC&to=ETH&merchant_id=d48953617c7f&address=&amount=1&ref_id=d48953617c7f&color=e66d3e"
                    width="600"
                    height="500"
                    className="changelly"
                    scrolling="no"
                    style={{overflowY: 'hidden', border: 'none'}}
                >
                    Can't load widget
                </iframe>
            </Row>
        );
    }
}

export default Swap;