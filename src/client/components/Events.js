import React, { useEffect } from 'react';
import { projectCards } from './data';
import Card from './Card';
import PageSection from './PageSection';
import Slideshow from './Slideshow';

const Events = (props) => {

    let eventCards, currentEvent;


    
        currentEvent = <Card
            src={projectCards[0].src}
            name={projectCards[0].name}
            wrapperClasses={'current-event'}
            key={0}
            />


    
    let current = 'true'


    return (

        <div className='events-wrapper'>               
        <PageSection
        extraStyles='page-banner'
        title='EVENTS'
         />

           { current ? 
           <div className='upcoming-events'>
               <h1>Upcoming Events</h1>
               <div className='vertical-card-wrapper'>
                {currentEvent}
               </div>
                <b><div className='event-description'>
Midnight West Fest is entering it’s third year, and we want your submissions! This year, we’ll be at The Historic Atlas Theatre for three days of independent film celebration! Friday night will kick off with live music, followed by an evening of comedy submissions. Saturday starts with High-Noon for our drama and action submissions, rounding out with another live preformance. From 6 that night until 3 in the morning with after dark set aside for our horror and grindhouse fans. Sunday will be family day, featuring our G and PG equivalent submissions as well as interactive filmmaking workshops for ages 6-14.
Located in the heart of Downtown Cheyenne, our festival is mere blocks from a number of local restaurants and bars, as well as many of the historic and cultural landmarks of our Capitol City.
15% of all ticket sales will be donated to Cheyenne Little Theatre Players for the upkeep and maintenance of The Historic Atlas Theatre.
                </div></b>
               
            </div> 
           :  <></>
           }

            <div className='previous-events'>
               <h1>Previous Events</h1>
               <div className='horizontal-card-wrapper'>
                   <Slideshow cards={projectCards.slice(1,)} wrapperClasses="project-slideshow" />
               </div>
            </div>
        </div>
    )
}

export default Events;