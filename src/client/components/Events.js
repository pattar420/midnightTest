import React from 'react';
import PageSection from './PageSection';
import Slideshow from './Slideshow';

const Events = (props) => {
    return (
        <div>               
        <PageSection
        extraStyles='page-banner'
        title='EVENTS'
         />

            <img src="../img/Midnight-West-Fest-Logo-patfix.jpg" alt="midnight west fest logo" className="events-logo" />
            ----------------------------------------------------------------------------------
           { props.events ? <div className='event-banner'>More events in the works2</div> 
                        : <Slideshow /> }
            
        </div>
    )
}

export default Events;