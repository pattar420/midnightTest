import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export class SponsorEntry extends Component {
    render() {
        return (
            <div className='sponsorEntry'>
                <BrowserRouter>
                <Link to={this.props.link}>
                    <img src={this.props.sponsorLogo} alt={this.props.name} />
                </Link>
                </BrowserRouter>
            </div>
        )
    }
}

export default SponsorEntry;
