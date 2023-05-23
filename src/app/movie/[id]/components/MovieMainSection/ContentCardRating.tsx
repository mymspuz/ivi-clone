import React, { useContext } from 'react'

import { MovieContext } from '../../page'

const ContentCardRating = () => {

    const data = useContext(MovieContext)

    return (
        <div className="ratingMobile contentCard__ratingMobile">
            <div className="ratingMobile__container">
                <div className="ratingMobile__nbl-ratingPlate nbl-ratingPlate nbl-ratingPlate_style_xadus nbl-ratingPlate_size_wyrms">
                    <div className="nbl-ratingPlate__value">{data.rating.valueInt},{data.rating.valueFract}</div>
                </div>
                <div className="ratingMobile__textBlock">
                    <div className="ratingMobile__title">Рейтинг Иви</div>
                    <div className="ratingMobile__subtitle">Интересный сюжет</div>
                    <div className="ratingMobile__extra">{data.voites} оценок</div>
                </div>
                <button
                    className="nbl-button nbl-button_style_ran nbl-button_size_sindel nbl-button_hasBadge_0 ratingMobile__nbl-button"
                    data-test="rate_button"
                >
                    <div className="nbl-button__primaryText">Оценить</div>
                </button>
            </div>
        </div>
    )
}

export default ContentCardRating