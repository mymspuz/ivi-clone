import React from 'react'

import { useAppDispatch } from '../../../../store/hooks'
import { setFilters } from '../../../../store/slice/moviesSlice'
import { IFilterType } from '../../../../models/Movies'

type TProps = {
    name: string
    type: IFilterType
    value: string
    size?: {
        width: number
        padding: number
    }
}

const MoviesSuggestion: React.FC<TProps> = ({ name, type, value, size }) => {

    const dispatch = useAppDispatch()

    return (
        <div
            key={name}
            className="ivi-carousel-item"
            style={{ paddingRight: `${size?.padding}px` }}
        >
            <div className="suggestion__item">
                <div
                    className="nbl-featureTag nbl-featureTag_style_nabil nbl-featureTag_size_hadat nbl-featureTag_isNavigable_1 suggestion__nbl-featureTag"
                    onClick={() => dispatch(setFilters({ type, value }))}
                >
                    <span className="nbl-featureTag__text">{name}</span>
                </div>
            </div>
        </div>

    )
}

export default MoviesSuggestion