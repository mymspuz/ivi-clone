import React from 'react'

import { IMainBanner } from '../../../../models/Movie'
import { mainSliders } from '../../../../data/dataMainSlider'
import MainSliderCard from './MainSliderCard'

const MainSlider: React.FC = () => {

    const data: IMainBanner[] = mainSliders

    return (
        <div className="promoSlider promoSlider_version_2 home__promoSlider" data-test="promoBlock">
            <div className="ivi-carousel ivi-carousel-initialized">
                <div className="nbl-xArrowButton nbl-xArrowButton_direction_left gallery__nbl-xArrowButton gallery__nbl-xArrowButton_slimPosterBlock gallery__nbl-xArrowButton">
                    <div className="nbl-icon nbl-xArrowButton__nbl-icon"></div>
                </div>
                <div className="ivi-carousel-viewport ivi-carousel__promoMod">
                    <div
                        className="ivi-carousel-container"
                        style={{transform: 'translate3d(-1216px, 0px, 0px)', width: '4920px'}}
                    >
                        {data && data.map(banner => <MainSliderCard key={banner.id} data={banner} />)}
                    </div>
                </div>
                <div className="nbl-xArrowButton nbl-xArrowButton_direction_right gallery__nbl-xArrowButton gallery__nbl-xArrowButton_slimPosterBlock gallery__nbl-xArrowButton">
                    <div className="nbl-icon nbl-xArrowButton__nbl-icon"></div>
                </div>
                <div className="ivi-carousel__shadow_right"></div>
            </div>
        </div>
    )
}

export default MainSlider