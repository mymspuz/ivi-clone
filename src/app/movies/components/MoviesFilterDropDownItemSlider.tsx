import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setFilters } from '@/store/slice/moviesSlice'
import { IFilterType } from '@/models/Movies'

type TProps = {
    type: IFilterType
}

const MoviesFilterDropDownItemSlider: React.FC<TProps> = ({ type }) => {

    const dispatch = useAppDispatch()
    const filterData = useAppSelector(state => state.movies.filters)

    return (
        <li className="filterDropdown__item filterDropdown__item_radio">
            <Slider
                range={false}
                min={0}
                max={type === 'ratings' ? 10 : 100000}
                value={type === 'ratings' ? filterData.ratings : filterData.votes}
                onChange={(value) => dispatch(setFilters({ type, value: String(value) })) }
            />
        </li>
    )
}

export default MoviesFilterDropDownItemSlider