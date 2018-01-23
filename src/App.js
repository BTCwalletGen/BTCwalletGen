import React, { Component } from 'react';
import './App.css';

import TopBar from './components/TopBar/TopBar';
import AppHeader from './components/Header/Header';
import AppMenu from './components/Menu/Menu';
import AppContent from './components/AppContent/AppContent';
import BoxContainer from './components/ui/BoxContainer';
import AppFooter from './components/Footer/Footer';

import { Layout, Row, Col } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'generate'
    }
  }

  menuHandler = (menuItem) => {
    this.setState({ current: menuItem });
  }

  render() {
    const current = this.state.current;
    return (
      <Layout>
        <TopBar>For a better experience, you can use a laptop or computer as the website is not fully responsive yet</TopBar>
        <AppHeader></AppHeader>
        <AppMenu handler={this.menuHandler}></AppMenu>

        <Row className="printable" gutter={32} style={{ margin: '16px auto', width: '100%', maxWidth: 1700 }}>
          <Col className="printable" md={16} sm={24}>
            <AppContent className="printable" menuItem={current}></AppContent>
          </Col>

          <Col md={8} sm={24} style={{opacity: 0.5}}>
            <BoxContainer>
              <h1 style={{
                    fontSize: '3rem',
                    margin: 0,
                    lineHeight: 0.9,
              }}>
                FAQ
              </h1>

              <div style={{
                textAlign: 'center',
                margin: '50px 0px',
                fontSize: 25
              }}
              className="coming-soon"
              >
                Coming soon
              </div>
            </BoxContainer>
          </Col>
        </Row>

        <AppFooter></AppFooter>
    </Layout>
    );
  }
}

export default App;
