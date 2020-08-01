import React, { Component } from 'react'

export class SponsorEntry extends Component {
    render() {
        return (
            <div className='sponsorEntry'>
                <Link to={this.props.sponsorLink}>
                    <img src={this.props.sponsorLogo} />
                </Link>
            </div>
        )
    }
}

export default SponsorEntry;
