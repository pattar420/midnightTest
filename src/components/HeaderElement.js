import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export class HeaderElement extends Component {
    render() {
        return (
            
            <div className="header-element">
               <NavLink to={this.props.link}>{this.props.title}</NavLink>
            </div>
        )
    }
}

export default HeaderElement
