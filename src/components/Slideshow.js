import React, { Component } from 'react';
import Card from './Card';


export class Slideshow extends Component {
    render() {

        let cardList = [];

        const renderCards = (cards) => {
            for(let card of cards){
                cards.append(
                <Card 
                pic={card.pic}
                discription={card.discription}
                />)
                
            }
        }

        return (
            <div className='slideshow-container'>
            <button className='slide-left'><i className='fa fa-arrow-left'/></button>
            <div className='slide-cards'>{renderCards()}</div>
            <button className='slide-right'><i className='fa fa-arrow-right'/></button>
            </div>
        )
    }
}

export default Slideshow;
