import React, { useContext } from 'react'

import MovieCreatorCard from './MovieCreatorCard'
import GalleryCarousel from '../../../../components/gallery-carousel/GalleryCarousel'
import { MovieContext } from '../../index'

type TProps = {
    handlerViewCreators: () => void
}

const MovieCreatorCarousel: React.FC<TProps> = ({ handlerViewCreators }) => {

    const data = useContext(MovieContext)

    return (
        <GalleryCarousel type={'big'} size={{ width: 88, padding: 24 }} viewMobile={true}>
            {data.creators && data.creators.slice(0, 13).map(creator => <MovieCreatorCard key={creator.creator.id} data={creator} />)}
            <div className="ivi-carousel-item" style={{ width: `${88}px`, paddingRight: `${24}px` }}>
                <a
                    className="nbl-moreTile nbl-moreTile_type_person nbl-moreTile_variant_natrus gallery__nbl-moreTile gallery__nbl-moreTile_fixedSlimPosterBlock"
                    onClick={handlerViewCreators}
                >
                    <div className="nbl-moreTile__captionWrapper">
                        <div className="nbl-moreTile__caption">Ещё</div>
                    </div>
                </a>
            </div>
        </GalleryCarousel>
    )
}

export default MovieCreatorCarousel