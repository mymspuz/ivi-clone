import GalleryCarousel from './GalleryCarousel'
import {dataMoviesTop} from '../../data/dataMovie'
import MovieItem from '../movie-item'

export default {
    component: GalleryCarousel,
    title: 'GalleryCarousel',
    tags: ['gallery-carousel'],
    decorators: []
}

export const Default = {
    args: {
        children: dataMoviesTop.slice(0, 10).map(item => <MovieItem data={item.movie} size={{ width: 153, padding: 24 }} />),
        size: { width: 153, padding: 24 },
        type: 'small'
    }
}