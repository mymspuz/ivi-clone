import React from 'react'

import { useAppDispatch } from '../../../../store/hooks'
import {setFilters} from "../../../../store/slice/moviesSlice";

type TProps = {
    icon: string
    name: string
    size?: {
        width: number
        padding: number
    }
}

const MoviesSliderGenresItem: React.FC<TProps> = ({ icon, name, size }) => {

    const dispatch = useAppDispatch()

    return (
        <div
            aria-hidden="true"
            style={{ outline: 'none', width: `${size?.width}px`, paddingRight: `${size?.padding}px`, display: 'inline-block' }}
        >
            <div>
                <div
                    className="gallery__item"
                    onClick={() => dispatch(setFilters({ type: 'genres', value: name }))}
                >
                    <a className="gallery__nbl-tile nbl-tile nbl-tile_type_compact nbl-tile_style_aratus nbl-tile_hasAvatar_0 nbl-tile_hasIcon_1">
                        <div className={`nbl-icon ${icon} nbl-icon_genre nbl-tile__nbl-icon nbl-tile__nbl-icon_genre`}></div>
                        <div className="nbl-tile__caption">{name}</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MoviesSliderGenresItem