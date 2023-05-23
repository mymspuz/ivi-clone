import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { resetFilters } from '../../../store/slice/moviesSlice'

const MoviesFilterReset: React.FC = () => {

    const isActive = useAppSelector(state => state.movies.isFilter)
    const dispatch = useAppDispatch()

    return (
        <div className={`filtersDesktop__button-container`}>
            <div
                className={`filtersDesktop__button${isActive ? '' : ' filtersDesktop__button_disabled'}`}
                onClick={() => dispatch(resetFilters())}
            >
                <div
                    className="nbl-icon nbl-icon_close_16"
                    style={{ width: '16px', height: '16px', fontSize: '16px', lineHeight: '16px' }}
                ></div>
                Сбросить фильтры
            </div>
        </div>
    )
}

export default MoviesFilterReset