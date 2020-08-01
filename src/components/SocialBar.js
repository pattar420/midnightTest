import React, { Component } from 'react';

export class SocialBar extends Component {
    render() {
        return (
            
            <div>
                {this.props.facebook["name"]}
                {this.props.youtube["name"]}
                {this.props.instagram["name"]}
            </div>
        )
    }
}

export default SocialBar
