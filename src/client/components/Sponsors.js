import React from 'react'
import PageSection from './PageSection';
import {sponsors} from './data';
import SponsorEntry from './SponsorEntry';

const Sponsors = (props) => {
    
 let sponsorList = [];

        const populateSponsors = () => {
            for(let s of sponsors) {
                let newSponsor = <SponsorEntry 
                                    name = {s.name}
                                    link = {s.link}
                                    logo = {s.logo}
                                    /> ;
                sponsorList.push(newSponsor);
            }
        }

        populateSponsors();

        return (
            <div>
            <PageSection
            extraStyles='page-banner'
            title='Sponsors'
             />
            
            </div>
        )
}

export default Sponsors
