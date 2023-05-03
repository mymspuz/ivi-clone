import React from 'react'

import { IMovieCreator } from '../../../../models/Movie'
import MovieCreatorItem from './MovieCreatorItem'

type TProps = {
    data: {
        title: string
        creators: IMovieCreator[]
    }
}

const MovieCreatorsList: React.FC<TProps> = ({ data }) => {

    const { title, creators } = data

    return (
        <div>
            <div className="gallery">
                <div className="gallery__header">
                    <span className="gallery__headerLink">{title}</span>
                </div>
                <ul className="gallery__list gallery__list_slimPosterBlock gallery__list_type_person">
                    {creators.map(creator => <MovieCreatorItem key={creator.id} creator={creator} />)}
                </ul>
            </div>
        </div>
    )
}

export default MovieCreatorsList