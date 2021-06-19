import React from 'react';
import { projectCards } from './data';
import Card from './Card';
import PageSection from './PageSection';
import Slideshow from './Slideshow';

const Events = (props) => {

    
    let eventCards = projectCards
            .map((card, index) => 
                <Card
                    src={card.src}
                    name={card.name}
                    key={index}
                />
    )



 


    return (
        <div className='events-wrapper'>               
        <PageSection
        extraStyles='page-banner'
        title='EVENTS'
         />

           { props.events ? 
           <div className='upcoming-events'>
               <h1>Upcoming Events</h1>
               <div className='verticle-card-wrapper'>
               {eventCards}
               </div>
            </div> 


           : <div className='previous-events'>
               <h1>Previous Events</h1>
               <div className='horizontal-card-wrapper'>
                   <Slideshow cards={projectCards} extraStyles="projectSlideshow" />
               </div>
            </div> }
            
        </div>
    )
}

export default Events;