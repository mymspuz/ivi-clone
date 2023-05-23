import React, { useContext } from 'react'

import { MovieContext } from '../../page'
import { MOVIE_URL } from '@/constants/urls'

const CommentMovieCard: React.FC = () => {

    const data = useContext(MovieContext)

    return (
        <div className="aside-poster-block movie-extras__aside-poster-block">
            <a
                className="nbl-link aside-poster-block movie-extras__aside-poster-block__nbl-link"
                href={`${MOVIE_URL}${data.id}`}
            >
                <div className="nbl-poster nbl-poster_type_poster nbl-poster_extrasMode_rusk aside-poster-block__nbl-poster">
                    <div className="nbl-poster__imageWrapper">
                        <img
                            className="nbl-poster__image"
                            data-stub="false"
                            src={data.poster}
                            alt={data.name}
                        />
                    </div>
                </div>
            </a>
            <div className="aside-poster-block__description">
                <div className="aside-poster-block__nbl-ratingCompact nbl-ratingCompact nbl-ratingCompact_style_utis nbl-ratingCompact_hasExtra_0">
                    <div className="nbl-ratingCompact__value">
                        <div className="nbl-ratingCompact__valueInteger">{data.rating.valueInt}</div>
                        <div className="nbl-ratingCompact__valueFraction">,{data.rating.valueFract}</div>
                    </div>
                    <div className="nbl-ratingCompact__graph nbl-ratingCompact__graph_filled">
                        {data.detailRating.map(detail => (
                            <div key={detail.name} className="nbl-progressBar nbl-progressBar_isRoundingEnabled_0 nbl-progressBar_hasHoverBar_0 nbl-progressBar_direction_leftToRight nbl-ratingCompact__nbl-progressBar">
                                <div className="nbl-progressBar__backBar"></div>
                                <div className="nbl-progressBar__valueBar" style={{ width: `${detail.value}%` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="aside-poster-block__text">
                    {`${data.yearRelease.start}${data.yearRelease.finish ? '-' + data.yearRelease.finish : ''}, ${data.country[0].name}, ${data.genres[0].name}`}
                </div>
                <div className="iconedText iconedText_size_ayame iconedText_style_kurse">
                    <div className="iconedText__icon iconedText__icon iconedText__icon_rent"></div>
                    <div className="iconedText__textBlock">
                        <div className="iconedText__title">{data.duration}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentMovieCard