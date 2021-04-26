import React from 'react'

const PageSubSection = (props) => {
    return (
        <div className={`page-section page-sub ${props.extraStyles}`}>
            <div className={`ps-body ${props.psExtra}`}>{props.body}</div>
            {props.children}
        </div>
    )
}

export default PageSubSection
