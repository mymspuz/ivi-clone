import React from 'react'

import { IMainTop } from '../../../../models/Movie'

type TProps = {
    data: IMainTop
}

const TopGalleryItem: React.FC<TProps> = ({ data }) => {

    const { id, title, img, logo, link } = data

    return (
        <div
            className="ivi-carousel-item"
            style={{ width: '224px', paddingRight: '24px' }}
        >
            <a
                className="nbl-posterUprightBlock nbl-posterUprightBlock_type_godun nbl-posterUprightBlock_status_default home__nbl-posterUprightBlock"
                href={link}
            >
                <div className="nbl-posterUprightBlock__imageSection">
                    <div className="nbl-poster nbl-poster_type_godun nbl-posterUprightBlock__nbl-poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                alt={title}
                                className="nbl-poster__image"
                                data-stub="false"
                                src={img}
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
                                {id < 10
                                    ?
                                        <img
                                            className="nbl-picture nbl-poster__nbl-picture"
                                            src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number${id}.svg`}
                                            alt={`top-${id}`}
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