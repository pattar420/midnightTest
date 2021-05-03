import React from 'react'
import SocialBar from './SocialBar'

const Footer = (props) => {
    return (
        <SocialBar 
        facebook={props.facebook}
        instagram={props.instagram}
        youtube={props.youtube}
        rss={props.rss}
        />
    )
}

export default Footer
