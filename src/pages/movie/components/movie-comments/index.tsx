import React, { useState } from 'react'

import CommentItem from './CommentItem'
import CommentMovieCard from './CommentMovieCard'
import CommentAddForm from "./CommentAddForm";
import {ButtonLink} from "../../../../components";

type TProps = {
    handlerViewComments: () => void
}

type IComments = {
    id: number, author: string, date: string, text: string
}

const MovieComments: React.FC<TProps> = ({ handlerViewComments }) => {

    const data: IComments[] = [
        { id: 1, author: 'author1', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
        { id: 2, author: 'author2', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
        { id: 3, author: 'author3', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
        { id: 4, author: 'author4', date: '2023-03-23', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet cupiditate debitis, deserunt eum exercitationem facilis iusto laudantium nulla pariatur perferendis, porro qui quo repellendus saepe? Accusamus animi, eveniet in incidunt nemo officiis repellendus vero.' },
    ]

    const [ comments, setComments ] = useState<IComments[]>(data)

    const addComment = (comment: string): void => {
        const temp = [...comments]
        temp.unshift({ id: 5, author: 'auth', date: '2023-05-10', text: comment })
        setComments(temp)
    }

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
                                    <CommentAddForm handlerAdd={addComment} />
                                    <ul className="movie-extras__comment-list">
                                        {comments.map(comment => <CommentItem key={comment.id} data={comment} />)}
                                    </ul>
                                    <ButtonLink
                                        addClass={'nbl-button_style_ran movie-extras__nbl-button_show-more'}
                                        title={'Показать ещё'}
                                        handlerClick={() => {}}
                                    />
                                </div>
                            </div>
                            <CommentMovieCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieComments