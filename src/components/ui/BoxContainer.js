import React, { Component } from 'react';

class BoxContainer extends Component {
    render() {
        return (
            <div
                className="box-container"
                style={{
                    background: 'white',
                    padding: 24,
                    boxShadow: '5px 5px 30px -10px #00000025'
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default BoxContainer;