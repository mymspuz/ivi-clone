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
    movieType: 'Фильмы' | 'Мультфильмы' | 'Сериалы'                             // Тип видео
    genres: { id: number, name: string }[]                                      // Список жанров
    yearRelease: { start: number, finish: number }                              // Даты видео
    duration: string                                                            // Продолжительность в часах или сезонах
    ageLimit: number                                                            // Ограничение по возрасту
    quality: { id: number, name: string }[]                                     // Доступное качество видео
    voice: { id: number, voiceType: 'voice' | 'subtitle', language: string }[]  // Озвучка
    rating: { valueInt: number, valueFract: number }                            // Рейтинг - целая часть и дробная
    voites: number                                                              // Количество оценок
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