import React, { useState } from 'react'

import { GalleryCarousel } from '../../../components'
import {MoviesFilterGenreItem, MoviesFilterDropDown, MoviesFilterCountryItem} from './index'

type TProps = {
    data: {
        name: string
        type: string
    }
}

const MoviesFilterItem: React.FC<TProps> = ({ data }) => {

    const sliderGenres: { icon: string, name: string }[] = [
        { icon: 'nbl-icon_genre_drama_32', name: 'Драмы'  },
        { icon: 'nbl-icon_genre_comedy_32', name: 'Комедии'  },
        { icon: 'nbl-icon_genre_action_32', name: 'Боевики'  },
        { icon: 'nbl-icon_genre_triller_32', name: 'Триллеры'  },
        { icon: 'nbl-icon_genre_adventure_32', name: 'Приключения'  },
    ]

    const sliderCountries: { icon: string, name: string }[] = [
        { icon: '', name: 'Россия' },
        { icon: '', name: 'США' },
        { icon: '', name: 'Великобритания' },
        { icon: '', name: 'Франция' },
        { icon: '', name: 'СССР' },
        { icon: '', name: 'Италия' },
        { icon: '', name: 'Канада' },
        { icon: '', name: 'Испания' },
        { icon: '', name: 'Германия' },
        { icon: '', name: 'Индия' }
    ]

    const [ active, setActive ] = useState<boolean>(false)

    let styleDropDown = ''
    if (data.type === 'genres')     styleDropDown = 'filterDropdown_genres'
    if (data.type === 'years')      styleDropDown = 'filterDropdown_years'
    if (data.type === 'countries')  styleDropDown = 'filterDropdown_countries'
    if (data.type === 'ratings')     styleDropDown = 'filterDropdown_iviRating'

    const sliders = data.type === 'genres' ? sliderGenres : sliderCountries

    return (
        <div className={`filtersDesktop__plank-item filtersDesktop__plank-item_count_5${data.type === 'countries' ? ' dropdownCenter' : ''}`}>
            <div className={`filtersDesktop__plank ${active ? 'isActive' : ''}`}>
                <div
                    className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank"
                    onClick={() => setActive(!active)}
                >
                    <div className="nbl-plank__textWrapper">
                        <div className="nbl-plank__title">
                            <p>{data.name}</p>
                        </div>
                    </div>
                    <div className="nbl-icon nbl-plank__dropdownIcon"></div>
                </div>
                <div className={`filterDropdown ${styleDropDown}`}>
                    {active &&
                        <div className="filterDropdown__inner">
                            <div className="filterDropdown__content">
                                {['genres', 'countries'].includes(data.type) &&
                                    <div className="filterDropdown__carousel">
                                        <div className="gallery filterDropdown__gallery">
                                            <GalleryCarousel size={{ width: 108, padding: 12 }} type={'big'}>
                                                {sliders.map(g =>
                                                    data.type === 'genres'
                                                        ?
                                                            <MoviesFilterGenreItem key={g.name} icon={g.icon} name={g.name} />
                                                        :
                                                            <MoviesFilterCountryItem key={g.name} icon={g.icon} name={g.name} />
                                                )}
                                            </GalleryCarousel>
                                        </div>
                                    </div>
                                }
                                {['creators'].includes(data.type) && <input type={'text'} /> }
                                <MoviesFilterDropDown type={data.type} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MoviesFilterItem