import React from 'react'
import PageSection from './PageSection';
import PageSubSection from './PageSubSection';
import Slideshow from './Slideshow';



const Homepage = () => {
        return (
            <div>
                <PageSection 
                title="MIDNIGHT WEST PRODUCTIONS"
                extraStyles="companyBanner"
                />
                <PageSection 
                title="EVENTS"
                />
                <PageSubSection 
                body="More events in the works"
                extraStyles="sectionSubBanner"
                />
                <PageSection 
                title="Projects"
                />
                <PageSubSection
                extraStyles="slide-section"
                psExtra="slide-extra">
                <Slideshow
                extraStyles="projectSlideshow"
                 />
                </PageSubSection>
            </div>
        )
}

export default Homepage
