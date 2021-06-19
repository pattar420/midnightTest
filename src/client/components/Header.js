import React, { useState, useEffect } from 'react'
import HeaderElement from './HeaderElement'
import mwLogo from '/public/img/mwLogoFix1.png'
import { ArrowDropDown } from '@material-ui/icons'


const Header = (props) => {

    const [menuVis, setVisibility] = useState(false)
    
    useEffect(() => {
        console.log('test 1 in header.js passed')
        setVisibility(false)
        const headerElements = document.getElementsByClassName('header-element');
        for(let el of headerElements){
            el.addEventListener('click', changeVisibility)
        }
    }, [])
    
    
    
    
    let vis = menuVis ? 'none' : 'flex' 
    
    const changeVisibility = () => {
        
        console.log('header elements: ', headerElements)
        setVisibility(!menuVis)
        console.log('vis: ', vis)
        for(let e of headerElements){
            e.style.display = vis;
        } 
    }

    
        

    return (
        <div className="header-container">
            <a href="/" className="header-logo">
                <img src={mwLogo} alt="midnight west logo" className='logo'></img>
            </a>
            <div className='dropdownArrow' onClick={changeVisibility}><ArrowDropDown /></div>
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

