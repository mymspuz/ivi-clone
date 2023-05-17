import React from 'react'

const MoviesFilterReset: React.FC = () => {

    const isActive = true

    return (
        <div className={`filtersDesktop__button-container`}>
            <div className={`filtersDesktop__button${isActive ? '' : ' filtersDesktop__button_disabled'}`}>
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