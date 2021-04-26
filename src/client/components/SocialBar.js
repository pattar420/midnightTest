import React from 'react'
import { Facebook, Instagram, RssFeed, YouTube } from '@material-ui/icons'

const SocialBar = (props) => {
    return (
            
        <div className='social-wrapper'>
            <a href={props.facebook["link"]}><Facebook /></a>
            <a href={props.youtube["link"]}><YouTube /></a>
            <a href={props.instagram["link"]}><Instagram /></a>
            <a href={props.rss}><RssFeed /></a>
        </div>
            
    )
}

export default SocialBar
