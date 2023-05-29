export interface IMainBanner {
    id: number
    banner: {
        wide: string
        narrow: string
        logo: string
    }
    title: string
    desc: string
    link: string
}

export interface IMovie {
    id: number                                                                  // ID
    name: string                                                                // Наименование
    engName: string
    movieType: 'Фильмы' | 'Мультфильмы' | 'Сериалы'                             // Тип видео
    genres: { id: number, name: string }[]                                      // Список жанров
    yearRelease: { start: number, finish: number }                              // Даты видео
    duration: string                                                            // Продолжительность в часах или сезонах
    ageLimit: number                                                            // Ограничение по возрасту
    quality: { id: number, name: string }[]                                     // Доступное качество видео
    voice: { id: number, voiceType: 'voice' | 'subtitle', language: string }[]  // Озвучка
    rating: { valueInt: number, valueFract: number }                            // Рейтинг - целая часть и дробная
    votes: number                                                               // Количество оценок
    detailRating: { name: string, value: number }[]                             // Детальный рейтинг по различным видам
    trailer: string                                                             // Трейлер
    poster: string                                                              // Постер
    description: string                                                         // Описание
    country: { id: number, name: string }[]                                     // Список стран
    price: { id: number, priceType: string }                                    // Цена
    feature: string                                                             // Особенный признак - эксклюзив, Выбор Иви и т.д.
    creators: {
        id: number,
        creator: IMovieCreator,
        role: string } []                                                       // Актеры и создатели 'Режиссёр' | 'Актёр' | 'Актёр дубляжа'
    reviews: IMovieReview[]                                                     // Комментарии
    lookWith?: IMovie[]                                                         // С этим фильмом смотрят
}

export interface IMovieCreator {
    id: number
    name: { rus: string, eng: string }
    poster: string
    description: string
    biography: string
}

export interface IMovieReview {
    id: number
    parentId: number
    author: string
    content: string
    date: Date
    vote: number
}

export interface IMovieResponse {
    film_id: number
    name: string
    alternativeName: string | null
    year: number
    type?: string
    description?: string
    shortDescription?: string
    slogan?: string | null
    kprating: number
    kpvotes?: number
    movieLength: number
    ageRating?: number
    trailer?: string
    poster: string
    genres: string[]
    countries: string[]
    staff?: IMovieCreatorResponse[]
}

export interface IMovieDetailResponse {
    film: IMovieResponse
    lookWith: IMovieResponse[]
}

export interface IMovieCreatorResponse {
    person_id: number
    name: string
    enName: string
    photo: string
    profession: string
    description: string | null
    enProfession: string
    films?: IMovieResponse[]
}

export interface IMovieCreatorSliderResponse {
    person_id: number
    firstName: string
    lastName: string
    photo: string
    films_count: string
}

export interface IMovieResponseMainPage {
    top10: IMovieResponse[]
    cartoons: IMovieResponse[]
    foreign: IMovieResponse[]
}

export interface IMovieMainPage {
    top10: IMovie[]
    cartoons: IMovie[]
    foreign: IMovie[]
}

export interface IMoviesPage {
    tops: IMovie[]
    news: IMovie[]
    genres: { id: number, name: string }[]
    countries: { id: number, name: string }[]
}

export interface IGenresResponse {
    genre_id: number
    name: string
}

export interface IMovieUpdateResponse {
    name: string,
    alternativeName: string,
    year: number,
    description: string,
    shortDescription: string,
    slogan: string,
    kprating: number,
    kpvotes: number,
    movieLength: number,
    ageRating: number,
    trailer: string,
    poster: string,
    type: string
}

export type IFilterType = 'genres' | 'years' | 'countries' | 'actors' | 'directors' | 'ratings' | 'votes'

export type TSorting = 'name' | 'date' | 'vote' | 'rating'

export type TFilters = {
    genres: string[]
    years: string
    countries: string[]
    ratings: number
    votes: number
    actors: string
    directors: string
}

export type TIdName = {
    id: number
    name: string
}

export type TMoviesState = {
    genres: TIdName[]
    countries: TIdName[]
    years: TIdName[]
    filters: TFilters
    isFilter: boolean
    page: number
    movies: IMovie[]
    searchParams: string
    sorting: { id: number, name: string, type: TSorting }
}