import {
    IMovie,
    IMovieCreator,
    IMovieCreatorResponse,
    IMovieDetailResponse,
    IMovieResponse
} from '../models/Movie'

const getNumberArray = (src: string[]): { id: number, name: string }[] =>
    src.map((g, index) => { return { id: index, name: g }})

const getFract = (src: number): string => src ? src.toFixed(2).split('.')[1] : '00'

export const transformMovies = (src: IMovieResponse[]): IMovie[] => {
    return src.map(m => {
        return {
            id: m.film_id,
            name: m.name,
            movieType: 'Фильмы',
            genres: m.genres ? getNumberArray(m.genres) : [],
            yearRelease: { start: m.year, finish: 0 },
            duration: `${m.movieLength} мин.`,
            ageLimit: 0,
            quality: [],
            voice: [],
            rating: { valueInt: Math.trunc(m.kprating), valueFract: +getFract(m.kprating) },
            voites: m.kpvotes ? m.kpvotes : 0,
            detailRating: [
                { name: 'сюжет', value: 59 },
                { name: 'актёры', value: 65 },
                { name: 'режиссура', value: 55 },
                { name: 'зрелищность', value: 45 },
            ],
            trailer: '',
            poster: m.poster,
            description: '',
            country: m.countries ? getNumberArray(m.countries) : [],
            price: { id: 1, priceType: 'Бесплатно' },
            feature: '',
            creators: [],
            reviews: []
        }
    })
}

export const transformMovieDetail = (details: IMovieDetailResponse): IMovie => {
    const { film, lookWith } = details
    return {
        id: film.film_id,
        name: film.name,
        movieType: 'Фильмы',
        genres: film.genres ? getNumberArray(film.genres) : [],
        yearRelease: { start: film.year, finish: 0 },
        duration: `${film.movieLength ? film.movieLength : 0} мин.`,
        ageLimit: film.ageRating ? film.ageRating : 0,
        quality: [],
        voice: [],
        rating: { valueInt: Math.trunc(film.kprating), valueFract: +getFract(film.kprating) },
        voites: film.kpvotes ? film.kpvotes : 0,
        detailRating: [
            { name: 'сюжет', value: 59 },
            { name: 'актёры', value: 65 },
            { name: 'режиссура', value: 55 },
            { name: 'зрелищность', value: 45 },
        ],
        trailer: film.trailer ? film.trailer : '',
        poster: film.poster,
        description: film.description ? film.description : '',
        country: film.countries ? getNumberArray(film.countries) : [],
        price: { id: 1, priceType: 'Бесплатно' },
        feature: '',
        creators: film.staff ? transformPerson(film.staff) : [],
        reviews: [],
        lookWith: lookWith ? transformMovies(lookWith) : []
    }
}

export const transformPerson = (src: IMovieCreatorResponse[]): { id: number, creator: IMovieCreator, role: string }[] => {
    return src.map((c, index) => {
        return {
            id: index,
            creator: {
                id: c.person_id,
                name: {rus: c.name ? c.name : 'не указано', eng: c.enName ? c.enName : 'not found'},
                poster: c.photo,
                description: c.description ? c.description : '',
                biography: c.description ? c.description : '',
            },
            role: c.profession
        }
    })
}