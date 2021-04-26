import React from 'react'

const Card = (props) => {


    return (
        <div className={`slideshow-card ${props.wrapperClasses}`}>
            <img className={`card-image ${props.imageClasses}`} src={require('/public/img/' + props.src)} alt={props.name} />
        </div>
    )
}

export default Card

