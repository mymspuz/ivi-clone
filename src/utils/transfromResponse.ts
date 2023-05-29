import {
    IGenresResponse,
    IMovie,
    IMovieCreator,
    IMovieCreatorResponse, IMovieCreatorSliderResponse,
    IMovieDetailResponse,
    IMovieResponse, IMovieUpdateResponse
} from '@/models/Movie'

const getNumberArray = (src: string[]): { id: number, name: string }[] =>
    src.map((g, index) => { return { id: index, name: g }})

const getFract = (src: number): string => src ? src.toFixed(2).split('.')[1] : '00'

export const transformMovies = (src: IMovieResponse[]): IMovie[] => {
    return src.map(m => {
        return {
            id: m.film_id,
            name: m.name,
            engName: m.alternativeName as string,
            movieType: 'Фильмы',
            genres: m.genres ? getNumberArray(m.genres) : [],
            yearRelease: { start: m.year, finish: 0 },
            duration: `${m.movieLength} мин.`,
            ageLimit: 0,
            quality: [],
            voice: [],
            rating: { valueInt: Math.trunc(m.kprating), valueFract: +getFract(m.kprating) },
            votes: m.kpvotes ? m.kpvotes : 0,
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
        engName: film.alternativeName as string,
        movieType: 'Фильмы',
        genres: film.genres ? getNumberArray(film.genres) : [],
        yearRelease: { start: film.year, finish: 0 },
        duration: `${film.movieLength ? film.movieLength : 0} мин.`,
        ageLimit: film.ageRating ? film.ageRating : 0,
        quality: [],
        voice: [],
        rating: { valueInt: Math.trunc(film.kprating), valueFract: +getFract(film.kprating) },
        votes: film.kpvotes ? film.kpvotes : 0,
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

export const transformPersonDetail = (src: IMovieCreatorResponse): { creator: IMovieCreator, movies: IMovie[] } => {
    return {
        creator: {
            id: src.person_id,
            name: { rus: src.name, eng: src.enName },
            poster: src.photo,
            description: src.description ? src.description: '',
            biography: src.description ? src.description: ''
        },
        movies: src.films ? transformMovies(src.films) : []
    }
}

export const transformPersonName = (src: { person_id: number, name: string }[]): { id: number, name: string }[] => {
    return src.map(item => {
        return {
            id: item.person_id,
            name: item.name
        }
    })
}

export const transformPersonSlider = (src: IMovieCreatorSliderResponse[]): IMovieCreator[] => {
    return src.map(item => {
        return {
            id: item.person_id,
            name: {
                rus: `${item.lastName} ${item.firstName}`,
                eng: ''
            },
            poster: item.photo,
            description: item.films_count,
            biography: ''
        }
    })
}

export const transformGenres = (src: IGenresResponse[]): { id: number, name: string }[] => {
    return src.map(genre => {
        return {
            id: genre.genre_id,
            name: genre.name
        }
    })
}

export const transformMovieToMovieResponse = (src: IMovie): IMovieUpdateResponse => {
    return {
        name: src.name,
        alternativeName: src.engName,
        year: src.yearRelease.start,
        description: src.description,
        shortDescription: src.description,
        slogan: '',
        kprating: src.rating.valueInt + 0.1 * src.rating.valueFract,
        kpvotes: src.votes,
        movieLength: 0,
        ageRating: src.ageLimit,
        trailer: src.trailer,
        poster: src.poster,
        type: src.movieType
    }
}