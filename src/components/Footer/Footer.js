import React, { Component } from 'react';
import { Layout, Row, Col, Icon, Modal } from 'antd';

import './Footer.css';
import Logo2 from '../../assets/images/btcwalletgen2.svg';

import AhrefButton from '../ui/AhrefButton';

const { Footer } = Layout;

class AppFooter extends Component {

    disclaimer = () => {
        Modal.info({
            title: "Disclaimer",
            content: `THE SOFTWARE IS PROVIDED "AS IS", 
            WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
            INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
            IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
            DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
            TORT OR OTHERWISE, ARISING FROM, 
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        });
    }

    render() {
        return (
            <Footer>
                <Row
                    gutter={32} 
                    style={{ margin: 0 }}
                    style={{ maxWidth: 1700, width: '100%', margin: '0 auto' }}
                >
                    <Col className="firstSection" lg={8} md={12} sm={24}>
                        <img className="logo2" src={Logo2} />
                        <p>Free, open-source, client-side interface for generating Bitcoin wallets & more. Interact with the Bitcoin blockchain easily & securely. Double-check the URL ( btcwallletgen.com ) before unlocking your wallet.</p>
                        <a onClick={this.disclaimer} href="javascript:;">Disclaimer</a>
                        <p>© {(new Date()).getFullYear()} BTCwalletGen</p>
                    </Col>

                    <Col className="secondSection" lg={8} md={12} sm={24}>
                        
                        <h2 className="support-us">
                            {/* <Tooltip placement="topLeft" title="help."> */}
                                <Icon type="smile-o" />
                            {/* </Tooltip> */}
                            How you can support us.
                        </h2>

                        <p>By supporting our friends using our affiliate links to...</p>
                        <AhrefButton href="https://changelly.com/?ref_id=d48953617c7f" size="small" target="_blank">Swap coins instantly via Changelly.com</AhrefButton>

                        <p>Buy a...</p>
                        <AhrefButton href="https://www.ledgerwallet.com/r/87c4" size="small" target="_blank">Ledger Wallet</AhrefButton>
                        <AhrefButton href="https://changelly.com/?ref_id=d48953617c7f" size="small" target="_blank">Buffered VPN</AhrefButton>

                        <div className="donations">
                            <h2><Icon type="gift" />Told mom donations would pay the bills</h2>
                            <p className="donation-address">BTC:&nbsp;
                                <a href="https://blockexplorer.com/address/12AnfPiw6xndZvwdz732tk24gLs38vgtDn" target="_blank">12AnfPiw6xndZvwdz732tk24gLs38vgtDn</a>
                            </p>

                            <p className="donation-address">ETH:&nbsp;
                                <a href="https://etherscan.io/address/0xf1883f5541f6Ea4C83f64EA5F74b73fA629eB503" target="_blank">0xf1883f5541f6Ea4C83f64EA5F74b73fA629eB503</a>
                            </p>
                        </div>
                    </Col>

                    <Col className="thirdSection" lg={8} md={12} sm={24}>
                        <a href="https://btcwalletgen.com" target="_blank">BTCwalletGen.com</a>
                        <a href="mailto:speedtreammanga@gmail.com">Contact us</a>
                        <a className="social" href="https://www.reddit.com/r/BTCwalletGen/">
                            <svg width="24" height="24" aria-labelledby="reddit icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.204 14.049c-.06.276-.091.56-.091.847 0 3.443 4.402 6.249 9.814 6.249 5.41 0 9.812-2.804 9.812-6.249 0-.274-.029-.546-.082-.809l-.015-.032c-.021-.055-.029-.11-.029-.165-.302-1.175-1.117-2.241-2.296-3.103-.045-.016-.088-.039-.126-.07-.026-.02-.045-.042-.067-.064-1.792-1.234-4.356-2.008-7.196-2.008-2.815 0-5.354.759-7.146 1.971-.014.018-.029.033-.049.049-.039.033-.084.06-.13.075-1.206.862-2.042 1.937-2.354 3.123 0 .058-.014.114-.037.171l-.008.015zm9.773 5.441c-1.794 0-3.057-.389-3.863-1.197-.173-.174-.173-.457 0-.632.176-.165.46-.165.635 0 .63.629 1.685.943 3.228.943 1.542 0 2.591-.3 3.219-.929.165-.164.45-.164.629 0 .165.18.165.465 0 .645-.809.808-2.065 1.198-3.862 1.198l.014-.028zm-3.606-7.573c-.914 0-1.677.765-1.677 1.677 0 .91.763 1.65 1.677 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm7.233 0c-.914 0-1.678.765-1.678 1.677 0 .91.764 1.65 1.678 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm4.548-1.595c1.037.833 1.8 1.821 2.189 2.904.45-.336.719-.864.719-1.449 0-1.002-.815-1.816-1.818-1.816-.399 0-.778.129-1.09.363v-.002zM2.711 9.963c-1.003 0-1.817.816-1.817 1.818 0 .543.239 1.048.644 1.389.401-1.079 1.172-2.053 2.213-2.876-.302-.21-.663-.329-1.039-.329v-.002zm9.217 12.079c-5.906 0-10.709-3.205-10.709-7.142 0-.275.023-.544.068-.809C.494 13.598 0 12.729 0 11.777c0-1.496 1.227-2.713 2.725-2.713.674 0 1.303.246 1.797.682 1.856-1.191 4.357-1.941 7.112-1.992l1.812-5.524.404.095s.016 0 .016.002l4.223.993c.344-.798 1.138-1.36 2.065-1.36 1.229 0 2.231 1.004 2.231 2.234 0 1.232-1.003 2.234-2.231 2.234s-2.23-1.004-2.23-2.23l-3.851-.912-1.467 4.477c2.65.105 5.047.854 6.844 2.021.494-.464 1.144-.719 1.833-.719 1.498 0 2.718 1.213 2.718 2.711 0 .987-.54 1.886-1.378 2.365.029.255.059.494.059.749-.015 3.938-4.806 7.143-10.72 7.143l-.034.009zm8.179-19.187c-.74 0-1.34.599-1.34 1.338 0 .738.6 1.34 1.34 1.34.732 0 1.33-.6 1.33-1.334 0-.733-.598-1.332-1.347-1.332l.017-.012z" fill="#ffffff"></path></svg>
                        </a>
                        <a className="social" href=""><Icon type="twitter" /></a>
                        <a className="social" href="https://www.facebook.com/BTCwalletGen"><Icon type="facebook" /></a>
                        {/* <a className="social" href=""><Icon type="medium" /></a> */}
                        <a className="social" href=""><Icon type="github" /></a>
                        <p>version 0.1.0</p>
                    </Col>
                </Row>
            </Footer>
        );
    }
}

export default AppFooter;