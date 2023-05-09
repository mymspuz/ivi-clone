import React, { useContext } from 'react'

import { MovieContext } from '../../index'

const ContentCardTitle = () => {

    const data = useContext(MovieContext)
    const title = `${data.name} (${data.movieType} ${data.yearRelease.start})`

    return (
        <div className="watchTitle contentCard__watchTitle">
            <div className="watchTitle__title font-1160-42-44 font-600-46-46 font-320-32-36">
                {title}
            </div>
        </div>
    )
}

export default ContentCardTitle