import React from 'react'

import { CompilationHeader, GalleryCarousel, MovieItem } from '../../../../components'
import { IMovie } from '../../../../models/Movie'

type TProps = {
    title: string
    movies: IMovie[]
}

const MainCompilation: React.FC<TProps> = ({ title, movies }) => {

    return (
        <section className="pageSection home__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery gallery gallery_ivi-carousel">
                        <CompilationHeader title={title} />
                        <GalleryCarousel type={'big'} size={{ width: 153.12, padding: 24 }} viewMobile={true} >
                            {movies && movies.map(item => <MovieItem key={item.id} data={item} />)}
                        </GalleryCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainCompilation