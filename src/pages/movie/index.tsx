import React, { useState } from 'react'

import '../../assets/css/page-details.css'
import { addClass } from '../../utils/bodyClass'
import {
    MovieBackgroundContainer,
    MovieBreadCrumbsHeader,
    MovieMainSection,
    MovieCompilation,
    MovieCreators,
    MovieAdditional,
    MovieReviews,
    MovieAllDevice, MovieComments, MovieAllCreators
} from './components'

const MoviePage: React.FC = () => {

    addClass('body', 'details')
    addClass('body', 'contentCard')
    addClass('root', 'basePage__inner')

    const breadcrumbsHeader: { title: string, link: string }[] = [
        { title: 'Сериалы', link: '/' },
        { title: 'Детективы', link: '/' },
    ]

    const [ viewComments, setViewComments ] = useState<boolean>(false)
    const [ viewCreators, setViewCreators ] = useState<boolean>(false)

    return (
        <>
            <MovieBreadCrumbsHeader breadcrumbs={breadcrumbsHeader} />
            <MovieBackgroundContainer />
            <MovieMainSection />
            <div className="contentCard__underside">
                <MovieCompilation title={'С сериалом «Дублинские убийства» смотрят'} />
                <MovieCreators handlerViewCreators={() => setViewCreators(true)} />
                <MovieAdditional />
                <MovieReviews handlerViewComments={() => setViewComments(true)}/>
                <MovieAllDevice />
            </div>
            {viewComments && <MovieComments handlerViewComments={() => setViewComments(false)} />}
            {viewCreators && <MovieAllCreators handlerViewCreators={() => setViewCreators(false)} />}
        </>
    )
}

export default MoviePage