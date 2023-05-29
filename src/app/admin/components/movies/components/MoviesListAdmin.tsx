import React, { useEffect, useState } from 'react'
import PersonFilmographyItem from '@/app/person/[id]/components/person-filmography/PersonFilmographyItem'
import {
    useMoviePageQuery,
    useMovieRemoveMutation, useMovieUpdateMutation,

} from '@/store/queries/movies.queri'
import { IMovie } from '@/models/Movie'

const MoviesListAdmin = () => {

    const [ movies, setMovies ] = useState<IMovie[]>([])

    const { data, isLoading, isError, error, isSuccess } = useMoviePageQuery(1)

    const [ removeMovie ] = useMovieRemoveMutation()
    const [ updateMovie ] = useMovieUpdateMutation()

    const handleRemove = (id: number): void => {
        removeMovie(id)
            .unwrap()
            .then(fulfilled => {
                const copyMovies = [...movies]
                setMovies(copyMovies.filter(movie => movie.id !== id))
            })
            .catch(rejected => console.error(rejected))
    }

    const handleEdit = (data: IMovie): void => {
        updateMovie(data)
            .unwrap()
            .then(fulfilled => {
                const copyMovies = [...movies]
                setMovies(copyMovies.map(movie => {
                    const temp = {...movie}
                    if (temp.id === data.id) {
                        temp.name = data.name
                        temp.engName = data.engName
                    }
                    return temp
                }))
            })
            .catch(rejected => console.error(rejected))
    }

    useEffect(() => {
        if (!isLoading && data) setMovies(data)
    }, [isLoading])

    return (
        <div id="filmography" className="personFilmography person__personFilmography">
            <div className="personFilmography__header">
                <div className="personFilmography__title">Фильмы</div>
            </div>
            <div className="personFilmography__content">
                <div className="personFilmography__list">
                    {movies.length && movies.map(movie =>
                        <PersonFilmographyItem
                            key={movie.id}
                            item={movie}
                            type={'admin'}
                            handleRemove={handleRemove}
                            handleEdit={handleEdit}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MoviesListAdmin