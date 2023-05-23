import React, { useContext } from 'react'

import { IMovieReview } from '@/models/Movie'
import MovieReviewItem from './MovieReviewItem'
import { dataReviews } from '@/data/dataMovie'
import { MovieContext } from '../../page'


type TProps = {
    handlerViewComments: () => void
}

const MovieReviews: React.FC<TProps> = ({ handlerViewComments }) => {

    const reviews: IMovieReview[] = dataReviews
    const data = useContext(MovieContext)

    return (
        <section className="pageSection contentCard__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="comments contentCard__comments">
                        <header className="comments__header">
                            <div className="comments__links">
                                <div className="extraLinks comments__extraLinks">
                                    <ul className="extraLinks__list">
                                        <li className="extraLinks__item">
                                            <a
                                                className="nbl-link nbl-link_style_paxe extraLinks__nbl-link"
                                                data-test="comments_title"
                                                onClick={handlerViewComments}
                                            >
                                                Отзывы
                                            </a>
                                            <div className="nbl-superscript nbl-superscript_style_default nbl-superscript_size_sheicu extraLinks__nbl-superscript">
                                                <div className="nbl-superscript__text">{reviews.length}</div>
                                            </div>
                                        </li>
                                        <div className="extraLinks__subtitle">о {data.movieType} {data.name}</div>
                                    </ul>
                                </div>
                                <button
                                    className="nbl-button nbl-button_textAlign_left nbl-button_style_ran nbl-button_size_cyrax nbl-button_hasBadge_0"
                                    onClick={handlerViewComments}
                                >
                                    <div className="nbl-button__primaryText">Оставить отзыв</div>
                                </button>
                            </div>
                        </header>
                        <div className="gallery gallery_ivi-carousel">
                            <div className="gallery__carousel">
                                <div className="gallery__viewport">
                                    <div className="gallery__viewport-inner">
                                        <div className="ivi-carousel">
                                            <div className="ivi-carousel-viewport">
                                                <div className="ivi-carousel-container">
                                                    {reviews && reviews.map(review =>
                                                        <MovieReviewItem key={review.id} review={review} handlerViewComments={handlerViewComments} />
                                                    )}
                                                </div>
                                            </div>
                                            <span className="xArrowButton xArrowButton_ugcTile xArrowButton_direction_right gallery__xArrowButton">
                                                <div className="xArrowButton__iconWrapper">
                                                    <div className="xArrowButton__icon"></div>
                                                </div>
                                            </span>
                                            <div className="ivi-carousel__shadow_right"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieReviews