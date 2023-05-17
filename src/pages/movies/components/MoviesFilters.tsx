import React from 'react'

import MoviesFilterItem from './MoviesFilterItem'
import MoviesFilterReset from './MoviesFilterReset'

const MoviesFilters = () => {
    return (
        <section className="filtersDesktop catalog__filtersDesktop">
            <div className="filtersDesktop__container">
                <div className="filtersDesktop__container-inner">
                    <div className="filtersDesktop__content">
                        <div className="filtersDesktop__plank-list">
                            <MoviesFilterItem data={{ name: 'Актеры', type: 'creators' }} />
                            <MoviesFilterItem data={{ name: 'Жанры', type: 'genres' }} />
                            <MoviesFilterItem data={{ name: 'Страны', type: 'countries' }} />
                            <MoviesFilterItem data={{ name: 'Годы', type: 'years' }} />
                            <MoviesFilterItem data={{ name: 'Рейтинг', type: 'ratings' }} />
                        </div>
                        <MoviesFilterReset />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesFilters