import React from 'react'

const SocialBar = (props) => {
    return (
            
        <div>
            {props.facebook["name"]}
            {props.youtube["name"]}
            {props.instagram["name"]}
        </div>
    )
}

export default SocialBar
