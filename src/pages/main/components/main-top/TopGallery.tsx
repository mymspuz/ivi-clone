import React from 'react'

import TopGalleryItem from './TopGalleryItem'
import { dataMoviesTop } from '../../../../data/dataMovie'


const TopGallery: React.FC = () => {

    const tops = dataMoviesTop

    return (
        <div className="gallery__carousel">
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div className="ivi-carousel">
                        <div className="ivi-carousel-viewport">
                            <div className="ivi-carousel-container">
                                {tops && tops.map((top, index) =>
                                    <TopGalleryItem key={top.movie.id} data={{ id: index + 1, ...top }} />)}
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