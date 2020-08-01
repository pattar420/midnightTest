import React, { Component } from 'react'
import PageSection from './PageSection';
import PageSubSection from './PageSubSection';
import Slideshow from './Slideshow';

export class Homepage extends Component {
    render() {
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
                <PageSubSection>
                <Slideshow />
                </PageSubSection>
            </div>
        )
    }
}

export default Homepage
