import React, { useEffect } from 'react'

import { useMovieByFilterQuery } from '../../../store/queries/movies.queri'
import MovieItem from '../../../components/movie-item'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import {setMovies, setPage} from '../../../store/slice/moviesSlice'

const MoviesGallery = () => {

    const filterData = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    let urlParams: string = ''
    let sep = '?'
    if (filterData.filters.genres.length) {
        urlParams += `${sep}genre=${filterData.filters.genres.join('%2B')}`
        sep = '&'
    }
    if (filterData.filters.countries.length) {
        urlParams += `${sep}country=${filterData.filters.countries.join('%2B')}`
        sep = '&'
    }
    if (filterData.filters.years !== 'Все годы') {
        urlParams += `${sep}year=${filterData.filters.years}`
        sep = '&'
    }
    if (filterData.page) {
        urlParams += `${sep}page=${filterData.page}`
    }

    const {
        data,
        isLoading,
        isError,
        error, isSuccess
    } = useMovieByFilterQuery(urlParams)

    useEffect(() => {
        if (isError) {
            if (Array.isArray((error as any).data.error)) {
                (error as any).data.error.forEach((el: any) => console.log(el.message))
            } else {
                console.log((error as any).data.message)
            }
        }
        if (!isLoading && data) {
            dispatch(setMovies(data))
        }
    }, [isLoading])

    useEffect(() => {
        if (data) {
            console.log('movies')
            dispatch(setMovies(data))
        }
    }, [filterData.page])

    return (
        <section className="pageSection pageSection_virtual genre__pageSection genre__pageSection_virtual">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div
                        className="genre__gallery gallery gallery_virtual"
                        style={{ height: `${filterData.page * (230 * 4)}px`, marginTop: '-12px', position: 'relative', outline: 'none', minHeight: '100vh' }}>
                        <div style={{ top: '12px', position: 'absolute', height: '100%', width: '100%', maxHeight: '100vh' }}>
                            <ul
                                style={{ marginTop: '0px', maxHeight: '100%' }}
                                className="gallery__list gallery__list_slimPosterBlock gallery__list_type_poster gallery__gallery__list"
                            >
                                {(!isLoading && data) && filterData.movies.map(item => (
                                    <li key={item.id} className="gallery__item gallery__item_virtual">
                                        <MovieItem data={item} size={{ width: 153.12, padding: 24 }} />
                                    </li>
                                ))}
                                {(data && data.length > 19) &&
                                    <div className="genre__moreButton">
                                        <button
                                            type="button"
                                            className="nbl-button nbl-button_style_ran nbl-button_size_shinnok nbl-button_hasBadge_0 genre__nbl-button genre__nbl-button_fullWidth"
                                            onClick={() => dispatch(setPage(filterData.page + 1))}
                                        >
                                            <div className="nbl-button__primaryText">Показать еще</div>
                                        </button>
                                    </div>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesGallery