import React from 'react'

import { IMovieCreator } from '../../../../models/Movie'
import { PERSON_URL } from '../../../../constants/urls'

type TProps = {
    creator: IMovieCreator
}

const MovieCreatorItem: React.FC<TProps> = ({ creator }) => {
    return (
        <li className="gallery__item">
            <a
                className="slimPosterBlock slimPosterBlock_type_person slimPosterBlock_status_default gallery__slimPosterBlock"
                href={`${PERSON_URL}${creator.id}`}
            >
                <div className="slimPosterBlock__imageSection">
                    <div className="poster poster_type_person slimPosterBlock__poster">
                        <div className="poster__imagePersonWrapper">
                            <img
                                className="poster__image"
                                data-stub="false"
                                src={creator.poster}
                            />
                        </div>
                    </div>
                </div>
                <div className="slimPosterBlock__textSection">
                    <div className="slimPosterBlock__title">{creator.name.rus.split(' ')[0]}</div>
                    <div className="slimPosterBlock__secondTitle">{creator.name.rus.split(' ')[1]}</div>
                    {/*<div className="slimPosterBlock__extra">3 фильма</div>*/}
                </div>
            </a>
        </li>
    )
}

export default MovieCreatorItem