import React from 'react'

type TProps = {
    icon: string
    name: string
}

const MoviesFilterGenreItem: React.FC<TProps> = ({ icon, name }) => {
    return (
        <div
            aria-hidden="false"
            className="slick-slide slick-active slick-current"
            data-index="0"
            style={{ outline: 'none', width: '120px', display: 'inline-block' }}
            tabIndex={-1}
        >
            <div>
                <div
                    className="filterDropdown__carousel-item"
                    style={{ width: '100%', display: 'inline-block' }}
                    tabIndex={-1}
                >
                    <div className="filterDropdown__nbl-tile nbl-tile nbl-tile_type_tornor nbl-tile_style_aratus nbl-tile_hasAvatar_0 nbl-tile_hasIcon_1">
                        <div
                            className={ `nbl-icon ${icon}` }
                            style={{ width: '32px', height: '32px', fontSize: '32px', lineHeight: '32px', color: 'rgb(255, 255, 255)' }}
                        ></div>
                        <div className="nbl-tile__caption">
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesFilterGenreItem