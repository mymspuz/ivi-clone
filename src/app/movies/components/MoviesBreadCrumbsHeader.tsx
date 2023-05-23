import React from 'react'

const MoviesBreadCrumbsHeader = () => {
    return (
        <div className="headerBar__controls">
            <div className="headerBar__nav">
                <ul className="breadCrumbs breadCrumbs_classic headerBar__breadCrumbs">
                    <li className="breadCrumbs__item">
                        <a
                            className="nbl-link nbl-link_style_chaf breadCrumbs__nbl-link"
                            href="https://www.ivi.ru/"
                            itemProp="item"
                        >
                            <span itemProp="name">Мой Иви</span>
                        </a>
                    </li>
                    <li className="breadCrumbs__item">
                        <span itemProp="name">Фильмы</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MoviesBreadCrumbsHeader