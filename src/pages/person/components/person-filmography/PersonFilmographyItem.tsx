import React from 'react'
import { Link } from 'react-router-dom'

import { IMovie } from '../../../../models/Movie'
import { MOVIE_URL } from '../../../../constants/urls'
import { ButtonLink } from '../../../../components'

type TProps = {
    item: IMovie
}

const PersonFilmographyItem: React.FC<TProps> = ({ item }) => {
    return (
        <div data-contentid={item.id} className="personFilmographyItem personFilmography__personFilmographyItem">
            <a href={`${MOVIE_URL}${item.id}`} className="personFilmographyItem__body">
                <div className="personFilmographyItem__figure">
                    <div className="nbl-poster nbl-poster_type_poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                className="nbl-poster__image"
                                data-stub="false"
                                src={item.poster}
                            />
                        </div>
                    </div>
                </div>
                <div className="personFilmographyItem__main">
                    <div className="personFilmographyItem__info">
                        <div className="personFilmographyItem__year">
                            <span>{item.yearRelease.start}</span>
                        </div>
                        <div
                            className="personFilmographyItem__title"
                            title={item.name}
                        >
                            {item.name}
                        </div>
                        <div className="personFilmographyItem__rating">
                            <span className="personFilmographyItem__ratingLabel">Рейтинг Иви:</span>
                            <span className="personFilmographyItem__ratingValue">
                                <span className="personFilmographyItem__ratingvalueInteger">{item.rating.valueInt}</span>
                                <span className="personFilmographyItem__ratingvalueFraction">,{item.rating.valueFract}</span>
                            </span>
                        </div>
                    </div>
                    <div className="personFilmographyItem__action">
                        <ButtonLink title={'Подробнее'} handlerClick={() => <Link to={`${MOVIE_URL}${item.id}`} />} />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default PersonFilmographyItem