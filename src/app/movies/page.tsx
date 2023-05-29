'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import '../../assets/css/page-catalog.css'
import { addClass } from '@/utils/bodyClass'
import {
    MoviesBreadCrumbsHeader,
    MoviesTextInfoHeader,
    MoviesFilters,
    MoviesSorting,
    MoviesSliderGenres,
    MoviesSliderCreators,
    MoviesSliderSuggestions,
    MoviesGallery
} from './components'
import { useMoviesQuery } from '@/store/queries/movies.queri'
import MoviesCompilation from './components/MoviesCompilation'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCountries, setFiltersFromUrl, setGenres } from '@/store/slice/moviesSlice'
import { getParamsFromUrl } from '@/utils/urlParams'

const MoviesPage = () => {

    addClass('body', 'catalog')
    addClass('body', 'contentCard')
    // addClass('root', 'basePage__inner')

    const moviesFilterData = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    const searchParams = useSearchParams()

    const {
        data,
        isLoading,
        isError,
        error, isSuccess
    } = useMoviesQuery({ genres: moviesFilterData.genres, countries: moviesFilterData.countries })

    useEffect(() => {
        if (isError) {
            if (Array.isArray((error as any).data.error)) {
                (error as any).data.error.forEach((el: any) => console.log(el.message))
            } else {
                console.log((error as any).data.message)
            }
        }
        if (!isLoading && data) {
            dispatch(setGenres(data.genres))
            dispatch(setCountries(data.countries))
        }
    }, [isLoading])

    useEffect(() => {
        if (searchParams) {
            const params = getParamsFromUrl(searchParams)
            dispatch(setFiltersFromUrl(params))
        }
    }, [])

    return (
        <>
            <section className="headerBar catalog__headerBar">
                <div className="headerBar__container">
                    <div className="headerBar__container-inner">
                        <MoviesBreadCrumbsHeader />
                        <MoviesTextInfoHeader />
                        {!moviesFilterData.isFilter && <MoviesSliderSuggestions />}
                    </div>
                </div>
            </section>
            {moviesFilterData.isFilter && <MoviesSorting />}
            {(!isLoading && data && moviesFilterData.countries.length && moviesFilterData.genres.length) &&
                <>
                    <MoviesFilters />
                    {!moviesFilterData.isFilter
                        ?
                            <>
                                <MoviesSliderGenres />
                                <MoviesCompilation title={'Лучшие фильмы'} data={data.tops} />
                                <MoviesCompilation title={'Выбор ИвИ'} data={data.news} />
                                <MoviesSliderCreators />
                            </>
                        :
                            <MoviesGallery />
                    }
                </>
            }
        </>
    )
}

export default MoviesPage