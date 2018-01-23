import React, { Component } from 'react';

import './TopBar.css';

class TopBar extends Component {
    render() {
        return (
            <div className="topbar">
                {this.props.children}
            </div>
        );
    }
}

export default TopBar;