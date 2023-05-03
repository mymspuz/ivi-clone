import React from 'react'

import CommentItem from './CommentItem'
import CommentMovieCard from './CommentMovieCard'
import { dataMovies } from '../../../../data/dataMovie'

type TProps = {
    handlerViewComments: () => void
}

const MovieComments: React.FC<TProps> = ({ handlerViewComments }) => {

    const data: { id: number, author: string, date: string, text: string }[] = [
        { id: 1, author: 'author1', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
        { id: 2, author: 'author2', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
        { id: 3, author: 'author3', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
        { id: 4, author: 'author4', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
    ]

    return (
        <div className="fullscreen-popup fullscreen-popup_active fullscreen-popup_has-close-view-button">
            <div className="fullscreen-popup__overlay"></div>
            <div className="fullscreen-popup__scroll-wrapper">
                <div className="fullscreen-popup__wrapper">
                    <a
                        className="nbl-simpleControlButton nbl-simpleControlButton_size_acor nbl-simpleControlButton_style_kark movie-extras__nbl-simpleControlButton"
                        onClick={handlerViewComments}
                    >
                        <div className="nbl-simpleControlButton__content">
                            <div className="nbl-icon nbl-icon_arrowLeft_8x20 nbl-simpleControlButton__nbl-icon"></div>
                            <div className="nbl-simpleControlButton__caption">К фильму</div>
                        </div>
                    </a>
                    <div className="movie-extras fullscreen-popup__movie-feedback modal-view modal-view_finish">
                        <div className="movie-extras__container">
                            <div className="movie-extras__container-inner">
                                <h1 className="movie-extras__title">Сын (фильм 2022)</h1>
                                <div className="movie-extras__ivi-tabs">
                                    <div className="ivi-tabs">
                                        <div className="ivi-tabs__list-wrapper">
                                            <ul className="ivi-tabs__list">
                                                <li
                                                    className="ivi-tabs__item ivi-tabs__item_active"
                                                    data-test="tab_comments"
                                                >
                                                    <a
                                                        className="ivi-tabs__link ivi-tabs__link_active"
                                                        href="/watch/504637/comments"
                                                    >
                                                        Отзывы
                                                    </a>
                                                    <sup className="ivi-tabs__sup">27</sup>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-extras__content movie-extras__content_feedback">
                                    <form className="movie-extras__form">
                                        <div className="nbl-avatar nbl-avatar_size_lugano nbl-avatar_isFullyRounded_0 nbl-avatar_available movie-extras__nbl-avatar">
                                            <div className="nbl-avatar__body">
                                                <div className="nbl-icon nbl-icon_avatar_16 nbl-avatar__nbl-icon"></div>
                                            </div>
                                        </div>
                                        <div className="movie-extras__nbl-input nbl-input nbl-input_style_xenon nbl-input_type_pascal nbl-input_iconType_none">
                                            <div className="nbl-input__body">
                                                <input
                                                    autoComplete="off"
                                                    className="nbl-input__editbox"
                                                    data-test="comments_input_comment"
                                                    type="text"
                                                    value=""
                                                />
                                                <div className="nbl-input__overlays">
                                                    <div className="nbl-input__placeholder">Написать отзыв</div>
                                                    <div className="nbl-input__stripe"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="movie-extras__form-footer">
                                            <button
                                                className="nbl-button nbl-button_style_ran nbl-button_size_shinnok nbl-button_hasBadge_0 movie-extras__nbl-button movie-extras__nbl-button_close-form"
                                                type="button"
                                            >
                                                <div className="nbl-button__primaryText">Отменить</div>
                                            </button>
                                            <button
                                                className="nbl-button nbl-button_disabled nbl-button_style_kioshi nbl-button_size_shinnok nbl-button_hasBadge_0 movie-extras__nbl-button"
                                                data-test="comments_send_comment"
                                                disabled={true}
                                                type="submit"
                                            >
                                                <div className="nbl-button__primaryText">Отправить</div>
                                            </button>
                                        </div>
                                    </form>
                                    <ul className="movie-extras__comment-list">
                                        {data.map(comment => <CommentItem key={comment.id} data={comment} />)}
                                    </ul>
                                    <button className="nbl-button nbl-button_style_ran nbl-button_size_shinnok nbl-button_hasBadge_0 movie-extras__nbl-button movie-extras__nbl-button_show-more">
                                        <div className="nbl-button__primaryText">Показать ещё</div>
                                    </button>
                                </div>
                            </div>
                            <CommentMovieCard data={dataMovies[0]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieComments