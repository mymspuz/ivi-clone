import React, { useState } from 'react'

import MoviesFilterItem from './MoviesFilterItem'
import MoviesFilterReset from './MoviesFilterReset'
import { useAppSelector } from '../../../store/hooks'
import { IFilterType } from '../../../models/Movies'

const MoviesFilters = () => {

    const filterData = useAppSelector(state => state.movies.filters)

    const [ selectFilterType, setSelectFilterType ] = useState<IFilterType | null>(null)

    const items = [
        { name: 'Актеры', type: 'creators' as IFilterType, styleDropDown: '', selected: filterData.creators },
        { name: 'Жанры', type: 'genres' as IFilterType, styleDropDown: 'filterDropdown_genres', selected: filterData.genres.toString() },
        { name: 'Страны', type: 'countries' as IFilterType, styleDropDown: 'filterDropdown_countries', selected: filterData.countries.toString() },
        { name: 'Годы', type: 'years' as IFilterType, styleDropDown: 'filterDropdown_years', selected: filterData.years === 'Все годы' ? '' : filterData.years },
        { name: 'Рейтинг', type: 'ratings' as IFilterType, styleDropDown: 'filterDropdown_iviRating', selected: filterData.ratings ? filterData.ratings.toString() : '' }
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