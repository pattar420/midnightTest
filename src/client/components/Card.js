import React from 'react'

const Card = (props) => {
    const pic = props.src

    return (
        <div className='slideshow-card'>
            <img className={`card-image ${props.extraClasses}`} src={pic} alt={props.name}/>
            <div className='card-description'>{props.description}</div>
        </div>
    )
}

export default Card

