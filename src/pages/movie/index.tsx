import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    MovieAllDevice,
    MovieComments,
    MovieAllCreators
} from './components'
import { useMovieByIdQuery } from '../../store/queries/movies.queri'
import { IMovie } from '../../models/Movie'

interface Params {
    id: string
}

export const MovieContext = React.createContext({} as IMovie)

const MoviePage: React.FC = () => {

    addClass('body', 'details')
    addClass('body', 'contentCard')
    addClass('root', 'basePage__inner')

    const params = useParams<keyof Params>() as Params

    const { data, isLoading, isError, error, isSuccess } = useMovieByIdQuery(params.id)

    useEffect(() => {
        if (isError) {
            if (Array.isArray((error as any).data.error)) {
                (error as any).data.error.forEach((el: any) => console.log(el.message))
            } else {
                console.log((error as any).data.message)
            }
        }
    }, [isLoading])

    const [ viewComments, setViewComments ] = useState<boolean>(false)
    const [ viewCreators, setViewCreators ] = useState<boolean>(false)

    return (
        isLoading
            ?
                <p>Loading...</p>
            :
                data
                    ?
                        <MovieContext.Provider value={data}>
                            <MovieBreadCrumbsHeader />
                            <MovieBackgroundContainer />
                            <MovieMainSection />
                            <div className="contentCard__underside">
                                <MovieCompilation />
                                <MovieCreators handlerViewCreators={() => setViewCreators(true)} />
                                <MovieAdditional />
                                <MovieReviews handlerViewComments={() => setViewComments(true)}/>
                                <MovieAllDevice />
                            </div>
                            {viewComments && <MovieComments handlerViewComments={() => setViewComments(false)} />}
                            {viewCreators && <MovieAllCreators handlerViewCreators={() => setViewCreators(false)} />}
                        </MovieContext.Provider>
                    :
                        <p>ErrorPage</p>
    )
}

export default MoviePage