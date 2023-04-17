import { IUIMenu, IUIMenuMain } from '../models/uiMenu'

export const mainMenuItems: IUIMenuMain [] = [
    { id: 1, title: 'Мой Иви', addClass: '', link: 'https://www.ivi.ru/' },
    { id: 2, title: 'Что нового', addClass: '', link: 'https://www.ivi.ru/new' },
    { id: 3, title: 'Фильмы', addClass: 'headerTop_movies_menu_item', link: 'https://www.ivi.ru/movies' },
    { id: 4, title: 'Сериалы', addClass: 'headerTop_series_menu_item', link: 'https://www.ivi.ru/series' },
    { id: 5, title: 'Мультфильмы', addClass: 'headerTop_animation_menu_item', link: 'https://www.ivi.ru/animation' },
    { id: 6, title: 'TV+', addClass: 'headerTop_tvplus_menu_item', link: 'https://www.ivi.ru/tvplus' },
]

export const moviesMenuItemsDoubleColumn: { title: string, items: IUIMenu[] } = {
    title: 'Жанры',
    items: [
        { id: 1, title: 'Артхаус', link: '#' },
        { id: 2, title: 'Боевики', link: '#' },
        { id: 3, title: 'Вестерн', link: '#' },
        { id: 4, title: 'Военные', link: '#' },
        { id: 5, title: 'Детективы', link: '#' },
        { id: 6, title: 'Для всей семьи', link: '#' },
        { id: 7, title: 'Для детей', link: '#' },
        { id: 8, title: 'Документальные', link: '#' },
        { id: 9, title: 'Драмы', link: '#' },
        { id: 10, title: 'Исторические', link: '#' },
        { id: 11, title: 'Катастрофы', link: '#' },
        { id: 12, title: 'Комедии', link: '#' },
        { id: 13, title: 'Криминальные', link: '#' },
        { id: 14, title: 'Мелодрамы', link: '#' },
        { id: 15, title: 'Мистические', link: '#' },
        { id: 16, title: 'По комиксам', link: '#' },
        { id: 17, title: 'Приключения', link: '#' },
        { id: 18, title: 'Спорт', link: '#' },
        { id: 19, title: 'Триллеры', link: '#' },
        { id: 20, title: 'Ужасы', link: '#' },
        { id: 21, title: 'Фантастика', link: '#' },
        { id: 22, title: 'Фэнтези', link: '#' },
    ]
}

export const moviesMenuItemsSingleColumn: { title: string, items: IUIMenu[] }[] = [
    {title: 'Страны', items: [
        {id: 1, title: 'Русские', link: '#'},
        {id: 2, title: 'Зарубежные', link: '#'},
        {id: 3, title: 'Советское кино', link: '#'},
    ]},
    {title: 'Годы', items: [
        {id: 1, title: 'Фильмы 2023 года', link: '#'},
        {id: 2, title: 'Фильмы 2022 года', link: '#'},
        {id: 3, title: 'Фильмы 2021 года', link: '#'},
        {id: 4, title: 'Фильмы 2020 года', link: '#'},
    ]},
]

export const moviesMenuItemsSideContent: IUIMenu[] = [
    { id: 1, title: 'Новинки', link: '#' },
    { id: 2, title: 'Подборки', link: '#' },
    { id: 3, title: 'Иви.Рейтинг', link: '#' },
    { id: 4, title: 'Скоро на Иви', link: '#' },
    { id: 5, title: 'Трейлеры', link: '#' },
    { id: 6, title: 'Что посмотреть', link: '#' },
    { id: 7, title: 'Фильмы в HD', link: '#' },
    { id: 8, title: 'Выбор Иви', link: '#' },
    { id: 9, title: 'Новинки подписки', link: '#' },
    { id: 10, title: 'Фильмы Amediateka', link: '#' },
    { id: 11, title: 'Популярные фильмы', link: '#' },
    { id: 12, title: 'Фильмы Иви', link: '#' },
]