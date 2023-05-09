import React, { useContext } from 'react'

import { MovieContext } from '../../index'

const ContentCardMedallionRating = () => {

    const data = useContext(MovieContext)

    return (
        <div className="nbl-medallion nbl-medallion_rating nbl-medallion_size_cobra watchMedallions__nbl-medallion">
            <div className="nbl-medallion__content">
                <div className="nbl-ratingPlate">
                    <div className="nbl-ratingPlate__value">{data.rating.valueInt},{data.rating.valueFract}</div>
                </div>
                <div className="nbl-medallion__value">{data.rating.valueInt},{data.rating.valueFract}</div>
            </div>
            <div className="nbl-medallion__caption">
                <div className="nbl-medallion__captionItem">Рейтинг</div>
                <div className="nbl-medallion__captionItem">Иви</div>
            </div>
        </div>
    )
}

export default ContentCardMedallionRating