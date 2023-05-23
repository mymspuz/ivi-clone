'use client'
import React, { useEffect, useState } from 'react'

import '../../assets/css/page-catalog.css'
import { addClass } from '@/utils/bodyClass'
import {
    MoviesBreadCrumbsHeader,
    MoviesTextInfoHeader,
    MoviesFilters,
    MoviesSorting,
    MoviesSliderGenres,
    MoviesSliderCreators,
    MoviesSliderSuggestions, MoviesGallery
} from './components'
import { useMoviesQuery } from '@/store/queries/movies.queri'
import MoviesCompilation from './components/MoviesCompilation'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCountries, setGenres } from '@/store/slice/moviesSlice'

const MoviesPage = () => {

    addClass('body', 'catalog')
    addClass('body', 'contentCard')
    addClass('root', 'basePage__inner')

    const moviesFilterData = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

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
        if (moviesFilterData.isFilter) {

        }
    }, [moviesFilterData])

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
            {(!isLoading && data) &&
                <>
                    <MoviesFilters />
                    {!moviesFilterData.isFilter
                        ?
                            <>
                                <MoviesSliderGenres />
                                <MoviesCompilation title={'Лучшие фильмы'} data={data.tops} />
                                <MoviesCompilation title={'Выбор ИвИ'} data={data.news} />
                                <MoviesSliderCreators data={data.creators} />
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