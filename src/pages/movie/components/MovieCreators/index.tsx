import React from 'react'

import { CompilationHeader } from '../../../../components'
import { creatorsList } from '../../../../data/dataCreators'
import MovieCreatorCarousel from './MovieCreatorCarousel'

const MovieCreators = () => {

    const creators = creatorsList

    return (
        <section className="pageSection contentCard__pageSection" id="creatorsList">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="creatorsList contentCard__creatorsList">
                        <div className="gallery gallery_creators gallery gallery_mGap pageSection__gallery">
                            <CompilationHeader title={'Актёры и создатели'} />
                            <MovieCreatorCarousel creators={creators} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieCreators