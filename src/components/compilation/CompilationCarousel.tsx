import React, {useState} from 'react'

import { MovieCard } from '../index'
import { dataMovies } from '../../data/dataMovie'

const CompilationCarousel: React.FC = () => {

    const animations = dataMovies

    const sizeItem = 153 + 24
    const countItem = Math.floor(window.innerWidth / sizeItem)
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const changeIndex = (value: number): void => {
        console.log(value)
        const newIndex = activeIndex + value * (countItem - 1)
        if (newIndex < 0) {
            setActiveIndex(0)
        } else if (newIndex + countItem > animations.length) {
            setActiveIndex(animations.length - countItem)
        } else {
            setActiveIndex(newIndex)
        }
        console.log(newIndex)
    }

    // slick-disabled
    return (
        <div className="gallery__carousel">
            <span
                className="slick-arrow slick-prev xArrowButton xArrowButton_slimPosterBlock xArrowButton_direction_left gallery__xArrowButton"
                data-test="collection_gallery_arrow_left"
                style={{ display: 'block' }}
            >
                <div className="xArrowButton__iconWrapper">
                    <div className="xArrowButton__icon" onClick={() => changeIndex(-1)}></div>
                </div>
            </span>
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div
                        className="slick-slider gallery__list gallery__list_type_poster gallery__list_slimPosterBlock slick-initialized"
                        dir="ltr"
                    >
                        <div className="slick-list">
                            <div
                                className="slick-track"
                                style={{
                                    width: `${animations.length * sizeItem + 1000}px`,
                                    opacity: 1,
                                    transform: `translate3d(${0 - sizeItem * activeIndex}px, 0px, 0px)`
                                }}
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
                className="slick-arrow slick-next xArrowButton xArrowButton_slimPosterBlock xArrowButton_direction_right gallery__xArrowButton"
                data-test="collection_gallery_arrow_right"
                style={{ display: 'block' }}
            >
                <div className="xArrowButton__iconWrapper">
                    <div className="xArrowButton__icon" onClick={() => changeIndex(1)}></div>
                </div>
            </span>
        </div>
    )
}

export default CompilationCarousel