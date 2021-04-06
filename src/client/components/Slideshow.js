import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Card from './Card';
 import {projectCards} from './data';

 

const Slideshow = (props) => {

        let [cardIndex, setCardIndex] = useState(0);
        console.log(projectCards)
        

        let cards = props.cardList
            .map((card, index) => {
                <Card
                    pic={card.pic}
                    description={card.description}
                    key ={index}
                    /> 
            } 
                   
                );

        const handleCarouselButton = (direction) => { 
            if(direction === -1){
                cardIndex = cardIndex - 1
                 if(cardIndex <= 0 ){ 
                    () => setCardIndex(cards.length)}
                    
                else{() => setCardIndex(cardIndex => cardIndex += direction)}
                } 
            else if(direction === 1){
                cardIndex = cardIndex + 1
                 if(cardIndex >= 0){
                    () => setCardIndex(cards.length)}
            }
            else{() => setCardIndex(cardIndex => cardIndex += direction)}
            console.log(direction)
        }


            

        return (
            <div className='slideshow-container'>
            <button className='slide-left slideshow-button' onClick={() => handleCarouselButton(-1) }><FaAngleLeft /></button>
            <div className='slide-cards'>{cards}</div>
            <button className='slide-right slideshow-button' onClick={() => handleCarouselButton(1)}><FaAngleRight /></button>
            </div>
        )
}

export default Slideshow
