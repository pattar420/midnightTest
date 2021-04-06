import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';


const SponsorEntry = (props) => {
    
return (
            <div className='sponsorEntry'>
                <BrowserRouter>
                <Link to={props.link}>
                    <img src={props.sponsorLogo} alt={props.name} />
                </Link>
                </BrowserRouter>
            </div>
        )
}

export default SponsorEntry
