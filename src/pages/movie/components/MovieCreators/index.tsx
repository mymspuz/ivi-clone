import React from 'react'

import { CompilationHeader } from '../../../../components'
import MovieCreatorCarousel from './MovieCreatorCarousel'
import { dataMovies } from '../../../../data/dataMovie'

type TProps = {
    handlerViewCreators: () => void
}

const MovieCreators: React.FC<TProps> = ({ handlerViewCreators }) => {

    const creators = dataMovies[0].creators

    return (
        <section className="pageSection contentCard__pageSection" id="creatorsList">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="creatorsList contentCard__creatorsList">
                        <div className="gallery gallery_creators gallery gallery_mGap pageSection__gallery">
                            <CompilationHeader title={'Актёры и создатели'} />
                            <MovieCreatorCarousel data={creators} handlerViewCreators={handlerViewCreators} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieCreators