import React, { Component } from 'react';
import { Row, Select } from 'antd';

import './BTCconvert.css';

const Option = Select.Option;
const currencies = ["USD", "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"];

class BTCconvert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: localStorage.getItem('currency') || currencies[0], //USD
            price: 0,
            BitcoinInfo: {}
        };

        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.fetchTicker = this.fetchTicker.bind(this);

        this.fetchTicker(this.state.currency);

        // this.tickerTimer = setInterval(() => {
        //     this.fetchTicker(this.state.currency);
        // }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.tickerTimer);
    }

    async handleCurrencyChange(e) {
        await this.fetchTicker(e);
        this.setState({ currency: e });
        localStorage.setItem('currency', e);
    }

    async fetchTicker(currency) {
        const res = await fetch(`https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=${currency}`);
        const data = (await res.json())[0];

        return new Promise((resolve, reject) => {
            try {
                this.setState(
                    {
                        BitcoinInfo: data, 
                        price: this.moneyFormat(data[`price_${currency.toLowerCase()}`])
                    },
                    () => {resolve()}
                );
            } catch (err) {
                console.log('Something went wrong calling coinmarketcap\'s api', err);
                this.setState({price: 'ERR'});
                reject(err);
            }
        });
    }

    moneyFormat(moneyStr) {
        return parseFloat(moneyStr).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

    render() {
        return (
            <div className="grouper">
                <p className="tickerprice">
                    1 BTC = {this.state.price}
                </p>
                <Select
                    showSearch
                    style={{ width: 80 }}
                    placeholder="Currency"
                    defaultValue={this.state.currency}
                    optionFilterProp="children"
                    onChange={this.handleCurrencyChange}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {currencies.map((currency) => {
                        return (
                            <Option key={currency} value={currency}>{currency}</Option>
                        )
                    })}
                </Select>
            </div>
        );
    }
}

export default BTCconvert;