import React from 'react'
import PageSection from './PageSection'
import { projectCards } from './data'
import Slideshow from './Slideshow'


const Projects = () => {
    
return (
            <div>
            <PageSection
            extraStyles='page-banner'
            title='Projects'
             />
            <Slideshow
                cards={projectCards}
            />

            </div>
        )
}

export default Projects
