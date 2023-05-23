import React from 'react'

import { GalleryCarousel } from '../../../../components'
import MoviesSliderCreatorsItem from './MoviesSliderCreatorsItem'
import { IMovieCreator } from '../../../../models/Movie'

type TProps = {
    data: {
        id: number
        creator: IMovieCreator
        role: string
    }[]
}

const MoviesSliderCreators: React.FC<TProps> = ({ data }) => {
    return (
        <section className="pageSection catalog__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery catalog__gallery">
                        <div className="gallery__header">
                            <span className="gallery__headerLink">Персоны</span>
                        </div>
                        <GalleryCarousel size={{ width: 153, padding: 24 }} type={'big'}>
                            {data.map(creator =>
                                <MoviesSliderCreatorsItem key={creator.id} data={creator.creator} />)
                            }
                        </GalleryCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesSliderCreators