import React, {useContext} from 'react'

import { CompilationHeader, GalleryCarousel, MovieItem } from '../../../components'
import { MovieContext } from '../index'

const MovieCompilation: React.FC = () => {

    const data = useContext(MovieContext)
    const title = `С ${data.movieType} ${data.name} смотрят`


    return (
        <section className="pageSection pageSection_detailsSelection contentCard__pageSection contentCard__pageSection_detailsSelection" id="relatedList">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery gallery gallery_dark gallery_ivi-carousel pageSection__gallery">
                        <CompilationHeader title={title} />
                        {data.lookWith &&
                            <GalleryCarousel type={'big'} size={{ width: 153.12, padding: 24 }} viewMobile={true} >
                                {data.lookWith.map(item => <MovieItem key={item.id} data={item} />)}
                            </GalleryCarousel>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieCompilation