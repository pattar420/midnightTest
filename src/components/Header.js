import React, { Component } from 'react'
import HeaderElement from './HeaderElement';



export class Header extends Component {
    
    render() {

        return (
            <div className="header-container">
                <div className="header-logo"><a href="/">
                    <img src="../img/mwLogoFix1.png" alt="midnight west logo"/>
                </a></div>
                {this.props.headerData.map( (element, index) => 
                    <HeaderElement
                    title={element.body}
                    link={element.link}
                    key={index}
                     />
                )}
                
            </div>
        )
    }
}

export default Header
