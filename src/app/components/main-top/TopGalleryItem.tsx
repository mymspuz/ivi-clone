import React from 'react'

import { IMovie } from '@/models/Movie'
import { MOVIE_URL } from '@/constants/urls'

type TProps = {
    data: { place: number, movie: IMovie, logo: string },
    size?: {
        width: number
        padding: number
    }
}

const TopGalleryItem: React.FC<TProps> = ({ data, size }) => {

    const { place, movie, logo} = data

    return (
        <div
            className="ivi-carousel-item"
            style={{ width: `${size?.width}px`, paddingRight: `${size?.padding}px` }}
        >
            <a
                className="nbl-posterUprightBlock nbl-posterUprightBlock_type_godun nbl-posterUprightBlock_status_default home__nbl-posterUprightBlock"
                href={`${MOVIE_URL}${data.movie.id}`}
            >
                <div className="nbl-posterUprightBlock__imageSection">
                    <div className="nbl-poster nbl-poster_type_godun nbl-posterUprightBlock__nbl-poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                alt={movie.name}
                                className="nbl-poster__image"
                                data-stub="false"
                                src={movie.poster}
                            />
                            <div className="nbl-poster__imageFade"></div>
                            <div className="nbl-poster__imageFadeFooter"></div>
                            <div className="nbl-poster__imageLogoArea">
                                <img
                                    alt="" className="nbl-poster__imageLogo"
                                    data-stub="false"
                                    src={logo}
                                />
                            </div>
                            <div className="nbl-poster__placeNumber">
                                {place < 10
                                    ?
                                        <img
                                            className="nbl-picture nbl-poster__nbl-picture"
                                            src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number${place}.svg`}
                                            alt={`top-${place}`}
                                        />
                                    :
                                        <>
                                            <img
                                                className="nbl-picture nbl-poster__nbl-picture"
                                                src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg`}
                                                alt={'top-10'}
                                            />
                                            <img
                                                className="nbl-picture nbl-poster__nbl-picture"
                                                src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number0.svg`}
                                                alt={'top-10'}
                                            />

                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nbl-posterUprightBlock__textSection"></div>
            </a>
        </div>
    )
}

export default TopGalleryItem