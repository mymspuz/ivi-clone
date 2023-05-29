import React, { useEffect, useState } from 'react'

import { useLazyMovieByFilterQuery } from '@/store/queries/movies.queri'
import MovieItem from '../../../components/movie-item'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setMovies, setPage } from '@/store/slice/moviesSlice'

const MoviesGallery: React.FC = () => {

    const filterData = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ numPage, setNumPage ] = useState<number>(filterData.page)

    const [ changeUrl, dataReq ] = useLazyMovieByFilterQuery()

    useEffect(() => {
        if (dataReq && dataReq.data) {
            dispatch(setMovies(dataReq.data))
            setIsLoading(false)
        }
    }, [dataReq])

    useEffect(() => {
        setIsLoading(true)
        changeUrl(filterData.searchParams)
    }, [filterData.filters, filterData.searchParams])

    useEffect(() => {
        if (numPage > 1) dispatch(setPage(numPage))
    }, [numPage])

    useEffect(() => {
        setPage(filterData.page)
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
                                {(!isLoading && dataReq) && filterData.movies.map(item => (
                                    <li key={item.id} className="gallery__item gallery__item_virtual">
                                        <MovieItem data={item} size={{ width: 153.12, padding: 24 }} />
                                    </li>
                                ))}
                                {(dataReq.data && dataReq.data.length > 19) &&
                                    <div className="genre__moreButton">
                                        <button
                                            type="button"
                                            className="nbl-button nbl-button_style_ran nbl-button_size_shinnok nbl-button_hasBadge_0 genre__nbl-button genre__nbl-button_fullWidth"
                                            onClick={() => setNumPage(numPage + 1)}
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