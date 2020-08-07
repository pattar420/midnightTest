import React from 'react'

const Card = (props) => {

    return (
        <div className='slideshow-card'>
            <img className={`card-image ${props.extraClasses}`} src={props.src} alt={props.name}/>
            <div className='card-description'>{props.description}</div>
        </div>
    )
}

export default Card

