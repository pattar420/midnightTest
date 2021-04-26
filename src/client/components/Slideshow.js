import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Card from './Card';
import { projectCards } from './data'

 

const Slideshow = (props) => {


        let [cardIndex, setCardIndex] = useState(0);
        
      
   

        const phoneWidth = window.matchMedia("(max-width: 500px)");
        
        const cardContent = () => {
            if(phoneWidth.matches){
                cards[cardIndex]
            } else {
                {cards[cardIndex]}{cards[cardIndex + 1]}
            }
        }    
    


        let cards = projectCards
            .map((card, index) => 
                <Card
                src={card.src}
                name={card.name}
                key={index}
                />
            );
            
            
        console.log("cards", cards)

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
            
        }

        const test = phoneWidth.matches ? <div className='slide-cards'>{cards[cardIndex]}</div>  : <div className='slide-cards'>{cards[cardIndex]} {cards[cardIndex+1]}</div>
        
            

        return (
            <div className='slideshow-container'>
            <button className='slide-left slideshow-button' onClick={() => handleCarouselButton(-1) }><ChevronLeft /></button>
                {test}
            <button className='slide-right slideshow-button' onClick={() => handleCarouselButton(1)}><ChevronRight /></button>
            </div>
        )
}

export default Slideshow
