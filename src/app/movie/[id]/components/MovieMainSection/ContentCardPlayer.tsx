import React from 'react'

import ContentCardTitle from './ContentCardTitle'
import ContentCardParams from './ContentCardParams'
import ContentCardUserActions from './ContentCardUserActions'
import ContentCardTrailer from './ContentCardTrailer'

const ContentCardPlayer = () => {

    return (
        <div className="contentCard__player">
            <ContentCardTitle />
            <ContentCardParams />
            <ContentCardTrailer />
            <ContentCardUserActions />
        </div>

    )
}

export default ContentCardPlayer