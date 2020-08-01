import React, { Component } from 'react'

export class PageSection extends Component {
    render() {
        return (
            <div className={`page-section ${this.props.extraStyles}`}>
                <div className="ps-body">{this.props.body}</div>
            </div>
        )
    }
}

export default PageSection
