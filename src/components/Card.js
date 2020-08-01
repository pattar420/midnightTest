import React, { Component } from 'react'

export class Card extends Component {
    render() {
        let length = '10vh';
        let width= '16vh';
        return (
            <div className='slideshow-card'>
                <img className={`card-image ${this.props.extraClasses}`} alt={this.props.alt}>{this.props.pic}</img>
                <div className='card-description'>{this.props.description}</div>
            </div>
        )
    }
}

export default Card
