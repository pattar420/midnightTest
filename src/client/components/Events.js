import React from 'react';
import { eventCards } from './data';
import PageSection from './PageSection';
import Slideshow from './Slideshow';

const Events = (props) => {
    return (
        <div className='events-wrapper'>               
        <PageSection
        extraStyles='page-banner'
        title='EVENTS'
         />

            <div className='event-logo-wrapper'><img src={require("/public" + "/img/Midnight-West-Fest-Logo-patfix.jpg")} alt="midnight west fest logo" className="events-logo" /></div>
           { props.events ? <div className='current-events'>{eventCards}</div> 
                        : <div className='previous-events'>{previousEvents}</div> }
            
        </div>
    )
}

export default Events;