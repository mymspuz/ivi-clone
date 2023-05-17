import React from 'react'

import { GalleryCarousel } from '../../../../components'
import { listGenres } from '../../../../data/dataMovie'
import MoviesSliderGenresItem from './MoviesSliderGenresItem'

const MoviesSliderGenres = () => {
    return (
        <section className="pageSection catalog__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery catalog__gallery">
                        <div className="gallery__header">
                            <span className="gallery__headerLink">Жанры</span>
                        </div>
                        <GalleryCarousel size={{ width: 153, padding: 24 }} type={'big'}>
                            {listGenres.map(genre =>
                                <MoviesSliderGenresItem key={genre.id} icon={genre.icon} name={genre.name} />)
                            }
                        </GalleryCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesSliderGenres