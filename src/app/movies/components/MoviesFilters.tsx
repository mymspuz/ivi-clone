import React, { useState } from 'react'

import MoviesFilterItem from './MoviesFilterItem'
import MoviesFilterReset from './MoviesFilterReset'
import { useAppSelector } from '@/store/hooks'
import { IFilterType } from '@/models/Movie'

const MoviesFilters = () => {

    const filterData = useAppSelector(state => state.movies.filters)
    const moviesData = useAppSelector(state => state.movies)

    const [ selectFilterType, setSelectFilterType ] = useState<IFilterType | null>(null)

    const items = [
        { name: 'Актеры', type: 'actors' as IFilterType, styleDropDown: '', selected: filterData.actors, listData: moviesData.filters.actors ? [{id: 1, name: moviesData.filters.actors}] : [] },
        { name: 'Режиссеры', type: 'directors' as IFilterType, styleDropDown: '', selected: filterData.directors, listData: moviesData.filters.directors ? [{id: 1, name: moviesData.filters.directors}] : [] },
        { name: 'Жанры', type: 'genres' as IFilterType, styleDropDown: 'filterDropdown_genres', selected: filterData.genres.toString(), listData: moviesData.genres },
        { name: 'Страны', type: 'countries' as IFilterType, styleDropDown: 'filterDropdown_countries', selected: filterData.countries.toString(), listData: moviesData.countries },
        { name: 'Годы', type: 'years' as IFilterType, styleDropDown: 'filterDropdown_years', selected: filterData.years === 'Все годы' ? '' : filterData.years, listData: moviesData.years },
        { name: 'Отзывы', type: 'votes' as IFilterType, styleDropDown: 'filterDropdown_iviRating', selected: filterData.votes ? filterData.votes.toString() : '', listData: [] },
        { name: 'Рейтинг', type: 'ratings' as IFilterType, styleDropDown: 'filterDropdown_iviRating', selected: filterData.ratings ? filterData.ratings.toString() : '', listData: [] }
    ]

    return (
        <section className="filtersDesktop catalog__filtersDesktop">
            <div className="filtersDesktop__container">
                <div className="filtersDesktop__container-inner">
                    <div className="filtersDesktop__content">
                        <div className="filtersDesktop__plank-list">
                            {items.map(item => (
                                <MoviesFilterItem
                                    key={item.name}
                                    data={item}
                                    selectFilter={selectFilterType}
                                    changeSelectFilter={() => setSelectFilterType(item.type)}
                                />
                            ))}
                        </div>
                        <MoviesFilterReset />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesFilters