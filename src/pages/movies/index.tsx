import React, { useEffect } from 'react'

import '../../assets/css/page-details.css'
import '../../assets/css/page-catalog.css'
import { addClass } from '../../utils/bodyClass'
import {
    MoviesBreadCrumbsHeader,
    MoviesTextInfoHeader,
    MoviesSuggestion,
    MoviesFilters,
    MoviesSorting, MoviesSliderGenres, MoviesSliderCreators
} from './components'
import { GalleryCarousel } from '../../components'
import { useMovieByIdQuery } from '../../store/queries/movies.queri'
import MoviesCompilation from './components/MoviesCompilation'

const MoviesPage = () => {

    addClass('body', 'catalog')
    addClass('body', 'contentCard')
    addClass('root', 'basePage__inner')

    const suggestions: { name: string, link: string }[] = [
        { name: '2022 год', link: '#' },
        { name: '2021 год', link: '#' },
        { name: '2020 год', link: '#' },
        { name: '2019 год', link: '#' },
        { name: '2018 год', link: '#' },
        { name: 'Бесплатные', link: '#' },
        { name: 'Русские фильмы', link: '#' },
        { name: 'Советские фильмы', link: '#' },
        { name: 'Американские фильмы', link: '#' },
        { name: 'Индийские фильмы', link: '#' },
        { name: 'Комедии', link: '#' },
        { name: 'Ужасы', link: '#' },
        { name: 'Фантастические', link: '#' },
        { name: 'Мелодрамы', link: '#' },
        { name: 'Триллеры', link: '#' },
    ]

    const { data, isLoading, isError, error, isSuccess } = useMovieByIdQuery('1')

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
        <>
            <section className="headerBar catalog__headerBar">
                <div className="headerBar__container">
                    <div className="headerBar__container-inner">
                        <MoviesBreadCrumbsHeader />
                        <MoviesTextInfoHeader />
                        <div className="suggestion headerBar__suggestion">
                            <div className="nbl-scrollpane nbl-scrollpane nbl-scrollpane_variation_kiek">
                                <GalleryCarousel size={{ width: 120, padding: 12 }} type={'big'}>
                                    {suggestions.map(s =>
                                        <MoviesSuggestion key={s.name} name={s.name} link={s.link} />)
                                    }
                                </GalleryCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MoviesSorting />
            <MoviesFilters />
            <MoviesSliderGenres />
            {(!isLoading && data) && <MoviesCompilation title={'Лучшие фильмы'} data={data.lookWith} />}
            {(!isLoading && data) && <MoviesCompilation title={'Выбор ИвИ'} data={data.lookWith} />}
            {(!isLoading && data) && <MoviesSliderCreators data={data.creators} />}
        </>
    )
}

export default MoviesPage