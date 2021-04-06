import React from 'react'
import HeaderElement from './HeaderElement'
import mwLogo from './../img/mwLogoFix1.png'


const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-logo"><a href="/">
                <img src={mwLogo} alt="midnight west logo" className='headerLogo' />
            </a></div>
            {props.headerData.map( (element, index) => 
                <HeaderElement
                title={element.body}
                link={element.link}
                key={index}
                 />
            )}
        </div>
    )
}

export default Header

