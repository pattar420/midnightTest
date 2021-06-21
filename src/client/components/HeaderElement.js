import React from 'react'
import {NavLink} from 'react-router-dom';



const HeaderElement = (props) => {
    
    return (
            
            <div className={`header-element`} >
               <NavLink to={props.link}>{props.title}</NavLink>
            </div>
        )
}

export default HeaderElement
