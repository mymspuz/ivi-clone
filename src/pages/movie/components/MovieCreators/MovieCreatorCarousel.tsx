import React from 'react'

import { ICreators } from '../../../../models/Creators'
import MovieCreatorCard from './MovieCreatorCard'

type TProps = {
    creators: ICreators[]
}

const MovieCreatorCarousel: React.FC<TProps> = ({ creators }) => {
    return (
        <div className="gallery__carousel">
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div className="gallery__list gallery__list_fixedSlimPosterBlock gallery__list_type_person">
                        {creators && creators.map(creator => <MovieCreatorCard key={creator.id} creator={creator} />)}
                        <div className="gallery__item gallery__item_more" data-test="persons_item_more">
                            <a
                                className="nbl-moreTile nbl-moreTile_type_person nbl-moreTile_variant_natrus gallery__nbl-moreTile gallery__nbl-moreTile_fixedSlimPosterBlock"
                                href="/watch/dublinskie-ubiystva/person"
                            >
                                <div className="nbl-moreTile__captionWrapper">
                                    <div className="nbl-moreTile__caption">Ещё</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCreatorCarousel