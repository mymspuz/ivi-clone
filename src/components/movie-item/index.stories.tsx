import MovieItem from './index'
import {IMovie} from "@/models/Movie";

export default {
    component: MovieItem,
    title: 'MovieItem',
    tags: ['movie-card']
}

export const Default = {
    args: {
        size: {
            width: 153,
            padding: 24
        },
        data: {
            id: 1,
            name: '13 грехов',
            movieType: 'Фильмы',
            genres: [{ id: 1, name: 'ужасы' }],
            yearRelease: { start: 2013, finish: 0 },
            duration: '88 мин.',
            ageLimit: 16,
            quality: [],
            voice: [],
            rating: { valueInt: 6, valueFract: 5 },
            voites: 2300,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: '',
            poster: 'https://st.kp.yandex.net/images/film_big/624156.jpg',
            description: '',
            country: [{ id: 1, name: 'США' }],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [],
            reviews: [],
            lookWith: []
        }
    }
}