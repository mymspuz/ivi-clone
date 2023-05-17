import React from 'react'

type TProps = {
    name: string
    link: string
    size?: {
        width: number
        padding: number
    }
}

const MoviesSuggestion: React.FC<TProps> = ({ name, link, size }) => {
    return (
        <div
            key={link}
            className="ivi-carousel-item"
            style={{ width: `${size?.width}px`, paddingRight: `${size?.padding}px` }}
        >
            <div className="suggestion__item">
                <a href={link}>
                    <div className="nbl-featureTag nbl-featureTag_style_nabil nbl-featureTag_size_hadat nbl-featureTag_isNavigable_1 suggestion__nbl-featureTag">
                        <span className="nbl-featureTag__text">{name}</span>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default MoviesSuggestion