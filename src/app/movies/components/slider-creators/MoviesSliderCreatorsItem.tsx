import React from 'react'

import { IMovieCreator } from '@/models/Movie'

type TProps = {
    data: IMovieCreator
    size?: {
        width: number
        padding: number
    }
}

const MoviesSliderCreatorsItem: React.FC<TProps> = ({ data, size }) => {
    return (
        <div
            className="slick-slide slick-active slick-current"
            aria-hidden="false"
            style={{ outline: 'none', width: `${size?.width}px`, paddingRight: `${size?.padding}px`, display: 'inline-block' }}
        >
            <div>
                <div className="gallery__item">
                    <a
                        href="/person/rupert_grint"
                        className="nbl-slimPosterBlock nbl-slimPosterBlock_type_person nbl-slimPosterBlock_status_default nbl-slimPosterBlock_iconStatus_none nbl-slimPosterBlock_available gallery__nbl-slimPosterBlock"
                    >
                        <div className="nbl-slimPosterBlock__imageSection">
                            <div className="nbl-poster nbl-poster_type_person nbl-poster_extrasMode_lu nbl-slimPosterBlock__nbl-poster">
                                <div className="nbl-poster__imageWrapper">
                                    <div className="nbl-poster__imagePersonWrapper">
                                        <img
                                            className="nbl-poster__image"
                                            data-stub="false"
                                            src={data.poster}
                                        />
                                    </div>
                                </div>
                                <div className="nbl-amountBadge nbl-amountBadge_size_milta nbl-amountBadge_status_default nbl-poster__nbl-amountBadge">
                                    <div className="nbl-amountBadge__backBox"></div>
                                    <div className="nbl-amountBadge__text">{data.description}</div>
                                </div>
                            </div>
                        </div>
                        <div className="nbl-slimPosterBlock__textSection">
                            <div className="nbl-slimPosterBlock__title">
                                <span className="nbl-slimPosterBlock__titleText">{data.name.rus.split(' ')[0]}</span>
                            </div>
                            <div className="nbl-slimPosterBlock__secondTitle">{data.name.rus.split(' ')[1]}</div>
                            <div className="nbl-slimPosterBlock__extra">
                                <div className="nbl-slimPosterBlock__extraItem">{data.description} фильма</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MoviesSliderCreatorsItem