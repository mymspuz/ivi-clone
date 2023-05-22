import React from 'react'

import MoviesFilterDropDownItemInput from './MoviesFilterDropDownItemInput'
import MoviesFilterDropDownItemRadio from './MoviesFilterDropDownItemRadio'
import MoviesFilterDropDownItemSlider from './MoviesFilterDropDownItemSlider'
import { useAppSelector } from '../../../store/hooks'
import { IFilterType } from '../../../models/Movies'

type TProps = {
    type: IFilterType
}

const MoviesFilterDropDown: React.FC<TProps> = ({ type }) => {

    const creators: { id: number, name: string }[] = []

    const moviesFiltersData = useAppSelector(state => state.movies)

    let data: { id: number, name: string }[] = []
    if (type ===    'genres')      data = moviesFiltersData.genres
    if (type ===    'years')       data = moviesFiltersData.years
    if (type ===    'countries')   data = moviesFiltersData.countries
    if (type ===    'creators')    data = creators

    return (
        <div className="filterDropdown__list-container">
            <ul className="filterDropdown__list hasSeparator">
                {['genres', 'countries', 'creators'].includes(type) && data.map(item => <MoviesFilterDropDownItemInput key={item.id} name={item.name} type={type} />)}
                {['years'].includes(type) && data.map(item => <MoviesFilterDropDownItemRadio key={item.id} name={item.name} />)}
                {['ratings'].includes(type) && <MoviesFilterDropDownItemSlider />}
            </ul>
        </div>
    )
}

export default MoviesFilterDropDown