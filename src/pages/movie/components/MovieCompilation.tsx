import React from 'react'

import { CompilationCarousel, CompilationHeader } from '../../../components'

type TProps = {
    title: string
}

const MovieCompilation: React.FC<TProps> = ({ title }) => {
    return (
        <section className="pageSection pageSection_detailsSelection contentCard__pageSection contentCard__pageSection_detailsSelection" id="relatedList">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery gallery gallery_dark gallery_ivi-carousel pageSection__gallery">
                        <CompilationHeader title={title} />
                        <CompilationCarousel />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieCompilation