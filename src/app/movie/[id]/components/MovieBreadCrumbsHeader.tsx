import React, { useContext } from 'react'

import { toCapitalize } from '@/utils/str'
import { MovieContext } from '../page'

const MovieBreadCrumbsHeader: React.FC = () => {

    const { genres } = useContext(MovieContext)

    return (
        <div className="watchHeader contentCard__watchHeader">
            <div className="headerBar headerBar_playerPage watchHeader__headerBar">
                <div className="headerBar__container">
                    <div className="headerBar__container-inner">
                        <div className="headerBar__controls">
                            <div className="headerBar__nav">
                                <ul className="breadCrumbs breadCrumbs_modern headerBar__breadCrumbs">
                                    {genres.map(breadcrumb => (
                                        <li
                                            key={breadcrumb.id}
                                            className="breadCrumbs__item"
                                            data-test="bread_crumbs_item"
                                            itemProp="itemListElement"
                                        >
                                            <a
                                                className="nbl-link nbl-link_style_wovou breadCrumbs__nbl-link"
                                                href={`movies/?genre=${breadcrumb.name}`}
                                                itemProp="item"
                                            >
                                                <span itemProp="name">{toCapitalize(breadcrumb.name)}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <span className="headerBar__link headerBar__link_back">Назад</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBreadCrumbsHeader