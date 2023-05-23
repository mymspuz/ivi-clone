import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setFilters } from '../../../store/slice/moviesSlice'
import { IFilterType } from '../../../models/Movies'

type TProps = {
    name: string
    type: IFilterType
}

const MoviesFilterDropDownItemInput: React.FC<TProps> = ({ name, type }) => {

    const dispatch = useAppDispatch()
    const filterData = useAppSelector(state => state.movies.filters)

    let items: string[] = []
    if (type === 'genres') items = filterData.genres
    if (type === 'countries') items = filterData.countries

    return (
        <li className="filterDropdown__item filterDropdown__item_checkbox">
            <label className="filterDropdown__label">
                <input
                    className="filterDropdown__input"
                    name={type}
                    type="checkbox"
                    value={name}
                    checked={items.includes(name)}
                    onChange={() => dispatch(setFilters({ type: type, value: name }))}
                />
                <div className="filterDropdown__input-text">{name}</div>
                <div className="filterDropdown__checkbox">
                    <div
                        className="nbl-icon nbl-icon_selected_16 filterDropdown__nbl-icon"
                        style={{ width: '16px', height: '16px', fontSize: '16px', lineHeight: '16px' }}
                    ></div>
                </div>
            </label>
        </li>
    )
}

export default MoviesFilterDropDownItemInput