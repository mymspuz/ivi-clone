import React from 'react'

import { useAppSelector } from '@/store/hooks'
import { getBreadCrumbs } from '@/utils/urlParams'

const MoviesBreadCrumbsHeader = () => {

    const currentFilters = useAppSelector(state => state.movies.filters)
    const breadCrumbs = getBreadCrumbs(currentFilters)

    return (
        <div className="headerBar__controls">
            <div className="headerBar__nav">
                <ul className="breadCrumbs breadCrumbs_classic headerBar__breadCrumbs">
                    <li className="breadCrumbs__item">
                        <a
                            className="nbl-link nbl-link_style_chaf breadCrumbs__nbl-link"
                            href="/"
                            itemProp="item"
                        >
                            <span itemProp="name">Мой Иви</span>
                        </a>
                    </li>
                    <li className="breadCrumbs__item">
                        <span itemProp="name">Фильмы</span>
                    </li>
                    {breadCrumbs.map((item, index) => (
                        <li key={index} className="breadCrumbs__item">
                            <a
                                className="nbl-link nbl-link_style_chaf breadCrumbs__nbl-link"
                                href={item.link}
                                itemProp="item"
                            >
                                <span itemProp="name">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MoviesBreadCrumbsHeader