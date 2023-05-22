import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setFilters } from '../../../store/slice/moviesSlice'

type TProps = {
    icon: string
    name: string
}

const MoviesFilterCountryItem: React.FC<TProps> = ({ icon, name }) => {

    const selectedCountries = useAppSelector(state => state.movies.filters.countries)
    const dispatch = useAppDispatch()

    return (
        <div
            className={`sausage sausage_type_light filterDropdown__sausage ${selectedCountries.includes(name) ? 'checked' : ''}`}
            onClick={() => dispatch(setFilters({ type: 'countries', value: name }))}
        >
            <div className="sausage__title">{name}</div>
        </div>
    )
}

export default MoviesFilterCountryItem