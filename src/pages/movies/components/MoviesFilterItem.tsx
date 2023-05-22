import React, { useState } from 'react'

import { GalleryCarousel } from '../../../components'
import {
    MoviesFilterGenreItem,
    MoviesFilterDropDown,
    MoviesFilterCountryItem,
    MoviesFilterCreatorsAutocomplete
} from './index'
import { IFilterType } from '../../../models/Movies'
import { listGenres } from '../../../data/dataMovie'
import { useAppSelector } from '../../../store/hooks'

type TProps = {
    data: {
        name: string
        type: IFilterType
        styleDropDown: string
        selected: string
    }
    selectFilter: IFilterType | null
    changeSelectFilter: () => void
}

const MoviesFilterItem: React.FC<TProps> = ({ data, selectFilter, changeSelectFilter }) => {

    const [ active, setActive ] = useState<boolean>(data.type === selectFilter)
    const filterData = useAppSelector(state => state.movies.countries)

    const sliders: { id: number, icon: string, name: string }[] =
        data.type === 'genres'
            ?
                listGenres
            :
                filterData.slice(0, 10).map(item => {
                    return { id: item.id, icon: '', name: item.name }
                })

    const handlerClick = () => {
        setActive(!active)
        changeSelectFilter()
    }

    return (
        <div className={`filtersDesktop__plank-item filtersDesktop__plank-item_count_5${data.type === 'countries' ? ' dropdownCenter' : ''}`}>
            <div className={`filtersDesktop__plank ${active && data.type === selectFilter ? 'isActive' : ''}`}>
                <div
                    className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank"
                    onClick={handlerClick}
                >
                    <div className="nbl-plank__textWrapper">
                        <div className="nbl-plank__title">
                            <p>{data.name}</p>
                        </div>
                        {data.selected && <div className="nbl-plank__extra">{data.selected}</div>}
                    </div>
                    <div className="nbl-icon nbl-plank__dropdownIcon"></div>
                </div>
                <div className={`filterDropdown ${data.styleDropDown}`}>
                    {(active && data.type === selectFilter) &&
                        <div className="filterDropdown__inner">
                            <div className="filterDropdown__content">
                                {['genres', 'countries'].includes(data.type) &&
                                    <div className="filterDropdown__carousel">
                                        <div className="gallery filterDropdown__gallery">
                                            <GalleryCarousel size={{ width: 108, padding: 12 }} type={'big'}>
                                                {sliders.map(g =>
                                                    data.type === 'genres'
                                                        ?
                                                            <MoviesFilterGenreItem key={g.id} icon={g.icon} name={g.name} />
                                                        :
                                                            <MoviesFilterCountryItem key={g.id} icon={g.icon} name={g.name} />
                                                )}
                                            </GalleryCarousel>
                                        </div>
                                    </div>
                                }
                                {['creators'].includes(data.type) && <MoviesFilterCreatorsAutocomplete /> }
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