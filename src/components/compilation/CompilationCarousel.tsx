import React from 'react'

import { MovieCard } from '../index'
import { dataMovies } from '../../data/dataMovie'

const CompilationCarousel: React.FC = () => {

    const animations = dataMovies

    return (
        <div className="gallery__carousel">
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div
                        className="slick-slider gallery__list gallery__list_type_poster gallery__list_slimPosterBlock slick-initialized"
                        dir="ltr">
                        <div className="slick-list">
                            <div
                                className="slick-track"
                                style={{ width: '3363px', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}
                            >
                                {animations && animations.map((item, index) => (
                                    <div
                                        key={item.id}
                                        aria-hidden="false"
                                        className="slick-slide slick-active"
                                        data-index={index + 1}
                                        style={{ outline: 'none', width: '177px' }}
                                    >
                                        <div>
                                            <MovieCard data={item} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span
                className="slick-arrow slick-prev slick-disabled xArrowButton xArrowButton_slimPosterBlock xArrowButton_direction_left gallery__xArrowButton"
                data-test="collection_gallery_arrow_left"
                style={{ display: 'block' }}
            >
                <div className="xArrowButton__iconWrapper">
                    <div className="xArrowButton__icon"></div>
                </div>
            </span>
            <span
                className="slick-arrow slick-next xArrowButton xArrowButton_slimPosterBlock xArrowButton_direction_right gallery__xArrowButton"
                data-test="collection_gallery_arrow_right"
                style={{ display: 'block' }}
            >
                <div className="xArrowButton__iconWrapper">
                    <div className="xArrowButton__icon"></div>
                </div>
            </span>
        </div>
    )
}

export default CompilationCarousel