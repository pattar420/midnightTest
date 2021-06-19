import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Card from './Card';

 

const Slideshow = (props) => {


        let [cardIndex, setCardIndex] = useState(0);
      
        useEffect(() => {
            const phoneWidth = window.matchMedia("(max-width: 500px)");
            const cardContent = () => {
                if(phoneWidth.matches){
                    cards[cardIndex]
                } else {
                    {cards[cardIndex]}{cards[cardIndex + 1]}
                }
        }    
        const cards = phoneWidth.matches ? <div className='slide-cards'>{cards[cardIndex]}</div>  : <div className='slide-cards'>{cards[cardIndex]} {cards[cardIndex+1]}</div>
        })


        let projectCards = props.cards

        let cards = projectCards
            .map((card, index) => 
                <Card
                src={card.src}
                name={card.name}
                key={index}
                />
            );
            
        const handleCarouselButton = (direction) => {
            if(direction === -1){
                setCardIndex(cardIndex += direction);
                if(cardIndex < 0 ){
                    setCardIndex(cards.length -1)
                }
            }
            else if(direction === 1){
                setCardIndex(cardIndex += direction);

                if(cardIndex > cards.length - 1){
                    setCardIndex(0);
                }
            }
            console.log(cardIndex)
        }

        
        
            

        return (
            <div className='slideshow-container'>
            <button className='slide-left slideshow-button' onClick={() => handleCarouselButton(-1) }><ChevronLeft /></button>
                {cards}
            <button className='slide-right slideshow-button' onClick={() => handleCarouselButton(1)}><ChevronRight /></button>
            </div>
        )
}

export default Slideshow
