import React from 'react'

import { mainTop } from '../../../../data/dataMainSlider'
import TopGalleryItem from './TopGalleryItem'


const TopGallery: React.FC = () => {

    const tops = mainTop

    return (
        <div className="gallery__carousel">
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div className="ivi-carousel">
                        <div className="ivi-carousel-viewport">
                            <div className="ivi-carousel-container">
                                {tops && tops.map(top => <TopGalleryItem key={top.id} data={top} />)}
                            </div>
                        </div>
                        <span className="xArrowButton xArrowButton_top10 xArrowButton_direction_right gallery__xArrowButton">
                            <div className="xArrowButton__iconWrapper">
                                <div className="xArrowButton__icon"></div>
                            </div>
                        </span>
                        <div className="ivi-carousel__shadow_right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopGallery