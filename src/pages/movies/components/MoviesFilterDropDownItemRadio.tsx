import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setFilters } from '../../../store/slice/moviesSlice'

type TProps = {
    name: string
}

const MoviesFilterDropDownItemRadio: React.FC<TProps> = ({ name }) => {

    const dispatch = useAppDispatch()
    const filterData = useAppSelector(state => state.movies.filters.years)

    return (
        <li className="filterDropdown__item filterDropdown__item_radio">
            <label className="filterDropdown__label">
                <input
                    className="filterDropdown__input"
                    type="radio"
                    name="years"
                    value={name}
                    checked={filterData === name}
                    onChange={() => dispatch(setFilters({ type: 'years', value: name }))}
                />
                <div className="filterDropdown__input-text">{name}</div>
                <div className="filterDropdown__radio"></div>
            </label>
        </li>
    )
}

export default MoviesFilterDropDownItemRadio