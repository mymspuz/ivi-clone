import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setFilters } from '@/store/slice/moviesSlice'

const MoviesFilterDropDownItemSlider = () => {

    const dispatch = useAppDispatch()
    const filterData = useAppSelector(state => state.movies.filters.ratings)

    return (
        <li className="filterDropdown__item filterDropdown__item_radio">
            <Slider
                range={false}
                min={0}
                value={filterData}
                onChange={(value) => dispatch(setFilters({ type: 'ratings', value: String(value) })) }
            />
        </li>
    )
}

export default MoviesFilterDropDownItemSlider