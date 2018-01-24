import React, { Component } from 'react';

class AhrefButton extends Component {
    constructor(props) {
        super(props);
        this.state = { hover: false }

        this.initStyling();
    }

    initStyling = () => {
        this.sizeIndex = this.props.size === 'small' ? 0 : 1;

        this.css = {
            color: 'white',
            background: 'linear-gradient(90deg, #ea8338, #e25736)',
            boxShadow: '0 5px 20px -8px #e25636, 0 8px 30px -10px #e25636, 0 30px 30px -19px rgba(226,86,54,0.28)',
            textDecoration: 'none',
            marginRight: 10,
        };

        this.cssHover = { boxShadow: '0 5px 20px -8px #e25636', };

        this.cssForSize = [
            { fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 4, }, // 'small' styling
            { /* custom styling for size = 'medium' */ }
        ];
    }

    hover = (hoverState) => {
        this.setState({ hover: hoverState });
    }

    render() {
        return(
            <a
                href={this.props.href}
                style={{
                    ...this.css,
                    ...this.cssForSize[this.sizeIndex],
                    ...((this.state.hover) ? this.cssHover : {})
                }}
                onMouseEnter={() => this.hover(true)}
                onMouseLeave={() => this.hover(false)}
                target={this.props.target}
            >
                {this.props.children}
            </a>
        );
    }
}

export default AhrefButton;