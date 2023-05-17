import React from 'react'

import { IMovie } from '../../../models/Movie'
import { CompilationHeader, GalleryCarousel, MovieItem } from '../../../components'

type TProps = {
    title: string
    data: IMovie[] | undefined
}

const MoviesCompilation: React.FC<TProps> = ({ title, data }) => {
    return (
        <section className="pageSection pageSection_detailsSelection contentCard__pageSection contentCard__pageSection_detailsSelection" id="relatedList">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery gallery gallery_dark gallery_ivi-carousel pageSection__gallery">
                        <CompilationHeader title={title} />
                        {data &&
                            <GalleryCarousel type={'big'} size={{ width: 153.12, padding: 24 }} viewMobile={true} >
                                {data.map(item => <MovieItem key={item.id} data={item} />)}
                            </GalleryCarousel>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesCompilation