import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../../assets/css/page-person.css'
import { addClass } from '../../utils/bodyClass'
import { PersonMainSection, PersonFilmography, PersonBiography } from './components'
import { usePersonByIdQuery } from '../../store/queries/persons.queri'
import { IMovie, IMovieCreator } from '../../models/Movie'

interface Params {
    id: string
}

export const PersonContext = React.createContext({} as { creator: IMovieCreator, movies: IMovie[] })

const PersonPage: React.FC = () => {

    addClass('body', 'person')
    addClass('root', 'basePage__inner')

    const params = useParams<keyof Params>() as Params

    const { data, isLoading, isError, error, isSuccess } = usePersonByIdQuery(params.id)

    useEffect(() => {
        if (isError) {
            if (Array.isArray((error as any).data.error)) {
                (error as any).data.error.forEach((el: any) => console.log(el.message))
            } else {
                console.log((error as any).data.message)
            }
        }
    }, [isLoading])

    return (
        isLoading
            ?
                <p>Loading...</p>
            :
                data
                    ?
                        <PersonContext.Provider value={data}>
                            <PersonMainSection />
                            <section className="pageSection pageSection_noGap person__pageSection person__pageSection_noGap">
                                <div className="pageSection__container">
                                    <div className="pageSection__container-inner">
                                        <div id="person-content-column" className="person__contentColumn">
                                            <PersonFilmography />
                                            {data.creator.biography && <PersonBiography />}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </PersonContext.Provider>
                    :
                        <p>ErrorPage</p>
    )
}

export default PersonPage