import React from 'react'

type TProps = {
    icon: string
    name: string
    size?: {
        width: number
        padding: number
    }
}

const MoviesSliderGenresItem: React.FC<TProps> = ({ icon, name, size }) => {
    return (
        <div
            aria-hidden="true"
            style={{ outline: 'none', width: `${size?.width}px`, paddingRight: `${size?.padding}px`, display: 'inline-block' }}
        >
            <div>
                <div className="gallery__item">
                    <a
                        href="/movies/drama"
                        className="gallery__nbl-tile nbl-tile nbl-tile_type_compact nbl-tile_style_aratus nbl-tile_hasAvatar_0 nbl-tile_hasIcon_1"
                    >
                        <div className={`nbl-icon ${icon} nbl-icon_genre nbl-tile__nbl-icon nbl-tile__nbl-icon_genre`}></div>
                        <div className="nbl-tile__caption">{name}</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MoviesSliderGenresItem