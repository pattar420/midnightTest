import React from 'react'
import PageSection from './PageSection';
import {sponsors} from './data';

const Sponsors = (props) => {


        
            let sponsorList = sponsors.map((sponsor, key) =>
                <a className='sponsor-entry' href={sponsor.link}>
                    <img src={require('./../../assets/' + sponsor.logo)} alt={sponsor.name} />
            </a>
            )

            console.log('sponsor list: ', sponsorList)
            

        return (
            <div>
            <PageSection
            extraStyles='page-banner'
            title='Sponsors'
             />
            <div className='sponsor-showcase'>
                {sponsorList}
            </div>
            
            </div>
        )
}

export default Sponsors
