import React, { useContext } from 'react'

import { GalleryCarousel } from '../../../components'
import TopGalleryItem from './TopGalleryItem'
import { MainPageContext } from '../../page'


const TopGallery: React.FC = () => {

    const data = useContext(MainPageContext)
    const tops = data.top10

    return (
        <GalleryCarousel type={'big'} size={{ width: 224, padding: 24 }} viewMobile={true}>
            {tops && tops.map((top, index) =>
                <TopGalleryItem key={top.id} data={{ place: index + 1, logo: '', movie: top }} />)}
        </GalleryCarousel>
    )
}

export default TopGallery