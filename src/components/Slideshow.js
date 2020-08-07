import React, { Component, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
 


import Card from './Card';
 


export class Slideshow extends Component {
    render() {

        let [cardIndex, setCardIndex] = useState(0);

        let cards = this.props.cardList
            .map(card => 
                <Card
                    pic={card.pic}
                    discription={card.discription}
                    />    
                );

        const handleCarouselButton = (direction) => {
            if(direction === -1){
                if(cardIndex <= 0 ){ 
                    setCardIndex(cards.length)}
                    
                else{setCardIndex(cardIndex => cardIndex += direction)}
                }
            else if(direction === 1){
                if(cardIndex >= 0){
                    setCardIndex(cards.length)}
            }
            else{setCardIndex(cardIndex => cardIndex += direction)}
        }


            

        return (
            <div className='slideshow-container'>
            <button className='slide-left slideshow-button' onClick={handleCarouselButton(-1)}><FaAngleLeft /></button>
            <div className='slide-cards'>{cards}</div>
            <button className='slide-right slideshow-button' onClick={handleCarouselButton(1)}><FaAngleRight /></button>
            </div>
        )
    }
}

export default Slideshow
