import React from 'react'

import { IMovieCreator } from '../../../../models/Movie'
import {dataCreators, dataMovies} from '../../../../data/dataMovie'
import MovieCreatorsList from './MovieCreatorsList'
import CommentMovieCard from '../movie-comments/CommentMovieCard'

type TProps = {
    handlerViewCreators: () => void
}

const MovieAllCreators: React.FC<TProps> = ({ handlerViewCreators }) => {

    const data: { title: string, creators: IMovieCreator[] }[] = [
        { title: 'Режиссёр', creators: [dataCreators[0]] },
        { title: 'Актёры', creators: dataCreators.slice(1, 5) },
        { title: 'Актёры дубляжа', creators: dataCreators.slice(5, 11) }
    ]

    return (
        <div className="fullscreen-popup fullscreen-popup_active fullscreen-popup_has-close-view-button">
            <div className="fullscreen-popup__overlay"></div>
            <div className="fullscreen-popup__scroll-wrapper">
                <div className="fullscreen-popup__wrapper">
                    <a
                        className="nbl-simpleControlButton nbl-simpleControlButton_size_acor nbl-simpleControlButton_style_kark movie-extras__nbl-simpleControlButton"
                        onClick={handlerViewCreators}
                    >
                        <div className="nbl-simpleControlButton__content">
                            <div className="nbl-icon nbl-icon_arrowLeft_8x20 nbl-simpleControlButton__nbl-icon"></div>
                            <div className="nbl-simpleControlButton__caption">К фильму</div>
                        </div>
                    </a>
                    <div className="movie-extras fullscreen-popup__movie-creators modal-view modal-view_finish">
                        <div className="movie-extras__container">
                            <div className="movie-extras__container-inner">
                                <h1 className="movie-extras__title">Сын (фильм 2022)</h1>
                                <div className="movie-extras__ivi-tabs">
                                    <div className="ivi-tabs">
                                        <div className="ivi-tabs__list-wrapper">
                                            <ul className="ivi-tabs__list">
                                                <li className="ivi-tabs__item ivi-tabs__item_active">
                                                    <a
                                                        className="ivi-tabs__link ivi-tabs__link_active"
                                                        href="/watch/504637/person"
                                                    >
                                                        Создатели
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-extras__content movie-extras__content_creators">
                                    {data.map(item => <MovieCreatorsList key={item.title} data={item} />)}
                                </div>
                            </div>
                            <CommentMovieCard data={dataMovies[0]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieAllCreators