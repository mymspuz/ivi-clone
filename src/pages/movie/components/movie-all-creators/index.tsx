import React, { useContext } from 'react'

import { IMovieCreator } from '../../../../models/Movie'
import MovieCreatorsList from './MovieCreatorsList'
import CommentMovieCard from '../movie-comments/CommentMovieCard'
import { MovieContext } from '../../index'

type TProps = {
    handlerViewCreators: () => void
}

const MovieAllCreators: React.FC<TProps> = ({ handlerViewCreators }) => {

    const data = useContext(MovieContext)
    const title = `${data.name} (${data.movieType} ${data.yearRelease.start})`

    const res: { id: number, role: string, creators: IMovieCreator[] }[] = []
    const creators = data.creators.reduce((acc, currentValue) => {
        const findEl = acc.filter(a => a.role === currentValue.role)
        findEl.length
            ? findEl[0].creators.push(currentValue.creator)
            : acc.push({ id: currentValue.id, role: currentValue.role, creators: [currentValue.creator] })
        return acc
    }, res)
    creators.sort((a, b) => a.creators.length - b.creators.length)

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
                                <h1 className="movie-extras__title">{title}</h1>
                                <div className="movie-extras__ivi-tabs">
                                    <div className="ivi-tabs">
                                        <div className="ivi-tabs__list-wrapper">
                                            <ul className="ivi-tabs__list">
                                                <li className="ivi-tabs__item ivi-tabs__item_active">
                                                    <a
                                                        className="ivi-tabs__link ivi-tabs__link_active"
                                                    >
                                                        Создатели
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-extras__content movie-extras__content_creators">
                                    {creators.map(item =>
                                        <MovieCreatorsList
                                            key={item.id}
                                            data={{ title: item.role, creators: item.creators}} />
                                    )}
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

export default MovieAllCreators