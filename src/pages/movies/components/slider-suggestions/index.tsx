import React from 'react'

import { GalleryCarousel } from '../../../../components'
import { MoviesSuggestion } from '../index'
import { suggestions } from '../../../../data/dataMovie'

const MoviesSliderSuggestions = () => {

    return (
        <div className="suggestion headerBar__suggestion">
            <div className="nbl-scrollpane nbl-scrollpane nbl-scrollpane_variation_kiek">
                <GalleryCarousel size={{ width: 150, padding: 12 }} type={'big'}>
                    {suggestions.map(s =>
                        <MoviesSuggestion key={s.id} name={s.name} type={s.type} value={s.value} />)
                    }
                </GalleryCarousel>
            </div>
        </div>
    )
}

export default MoviesSliderSuggestions