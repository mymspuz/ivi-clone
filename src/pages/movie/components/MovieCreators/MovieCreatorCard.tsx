import React from 'react'

import { ICreators } from '../../../../models/Creators'

type TProps = {
    creator: ICreators
}

const MovieCreatorCard: React.FC<TProps> = ({ creator }) => {
    return (
        <div className="gallery__item" data-test="persons_item">
            <a
                className="fixedSlimPosterBlock fixedSlimPosterBlock_type_person gallery__fixedSlimPosterBlock"
                href={creator.link}
            >
                <div className="fixedSlimPosterBlock__imageSection">
                {creator.img
                    ?
                        <div className="poster poster_type_person fixedSlimPosterBlock__poster">
                            <div className="poster__imagePersonWrapper">
                                <img
                                    className="poster__image" data-stub="false"
                                    src={creator.img}
                                    alt={''}
                                />
                            </div>
                        </div>
                    :
                        <div className="nbl-noPhotoPersonPoster nbl-noPhotoPersonPoster_sizing_heishe">
                            <div className="nbl-icon nbl-noPhotoPersonPoster__nbl-icon"></div>
                        </div>
                }
                </div>
                <div className="fixedSlimPosterBlock__textSection">
                    <div className="fixedSlimPosterBlock__title">{creator.data.title}</div>
                    <div className="fixedSlimPosterBlock__secondTitle">{creator.data.secondTitle}</div>
                    <div className="fixedSlimPosterBlock__extra">{creator.data.extra}</div>
                </div>
            </a>
        </div>
    )
}

export default MovieCreatorCard