import React, { useContext } from 'react'

import { toCapitalize } from '@/utils/str'
import { MovieContext } from '../../page'

const ContentCardParams = () => {

    const data = useContext(MovieContext)

    return (
        <div className="watchParams contentCard__watchParams">
            <ul className="watchParams__paramsList">
                <div className="watchParams__item">
                    <a
                        className="nbl-link nbl-link_style_wovou"
                        href="https://www.ivi.ru/series/2019"
                    >
                        {data.yearRelease.start}
                    </a>
                </div>
                <div className="watchParams__item">
                    <a className="nbl-link nbl-link_style_wovou nbl-link nbl-link_noLink">{data.duration}</a>
                </div>
                <div className="watchParams__item">
                    <a className="nbl-link nbl-link_style_wovou nbl-link nbl-link_noLink">{data.ageLimit}+</a>
                </div>
            </ul>
            <ul className="watchParams__paramsList">
                <div className="watchParams__item watchParams__item_hasDot">
                    <a
                        className="nbl-link nbl-link_style_wovou"
                        href="https://www.ivi.ru/series/ie"
                    >
                        {data.country[0].name}
                    </a>
                </div>
                {data.genres.map(genre => (
                    <div key={genre.id} className="watchParams__item watchParams__item_hasDot">
                        <a
                            className="nbl-link nbl-link_style_wovou"
                            href="https://www.ivi.ru/series/detective"
                        >
                            {toCapitalize(genre.name)}
                        </a>
                    </div>
                ))}
            </ul>
            <ul className="watchParams__paramsList">
                <div className="watchParams__item">
                    <div className="nbl-textBadge nbl-textBadge_size_nokro nbl-textBadge_style_rolin nbl-textBadge_isShadowEnabled_1">
                        <div className="nbl-textBadge__text">FullHD</div>
                    </div>
                </div>
                <div className="watchParams__item">
                    <div className="watchParams__iconComponent">
                        <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
                        <div className="watchParams__iconComponentTitle">Рус · Eng</div>
                    </div>
                </div>
                <div className="watchParams__item">
                    <div className="watchParams__iconComponent">
                        <div className="nbl-icon nbl-icon_player_subtitlesRegular_16 watchParams__nbl-icon"></div>
                        <div className="watchParams__iconComponentTitle">Рус</div>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default ContentCardParams