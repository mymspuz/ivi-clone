import React, { useContext } from 'react'

import { MovieContext } from '../../index'

const ContentCardDesc = () => {

    const data = useContext(MovieContext)

    return (
        <div className="watchDescription contentCard__watchDescription isCompilation">
            <div className="clause clause_is-native watchDescription__clause">
                <div className="clause__text is-truncated">
                    <div
                        className="clause__text-inner hidden-children"
                        data-test="details_text"
                    >
                        <p>{data.description.slice(0, 100)}</p>
                        <p>{data.description}</p>
                    </div>
                    <span className="clause__toggle">
                        <a className="nbl-link nbl-link_style_reska">Детали о {data.movieType}</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContentCardDesc