import React, { useContext } from 'react'

import { MovieContext } from '../../index'
import ContentCardMedallionRating from './ContentCardMedallionRating'

const ContentCardMedallions = () => {

    const data = useContext(MovieContext)

    return (
        <div className="watchMedallions contentCard__watchMedallions">
            <div className="watchMedallions__content">
                <ContentCardMedallionRating />
                {data.creators.map(c => (
                    <a
                        key={c.id}
                        className="nbl-medallion nbl-medallion_size_cobra watchMedallions__nbl-medallion"
                        href="/person/sara-grin"
                    >
                        <div className="nbl-medallion__content">
                            <div className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                <div className="nbl-avatar__body">
                                    <img
                                        alt={c.creator.name.rus}
                                        className="nbl-avatar__image"
                                        src={c.creator.poster}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="nbl-medallion__caption">{c.creator.name.rus}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ContentCardMedallions