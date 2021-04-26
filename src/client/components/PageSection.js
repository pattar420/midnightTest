import React from 'react'

const PageSection = (props) => {

    


    return (
        <div className={`page-section ${props.extraStyles}`}>
            <div className="ps-title"><b>{props.title}</b></div>
        </div>
    )
}

export default PageSection
