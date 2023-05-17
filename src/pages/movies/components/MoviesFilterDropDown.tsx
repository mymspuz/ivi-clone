import React from 'react'

import MoviesFilterDropDownItemInput from './MoviesFilterDropDownItemInput'
import MoviesFilterDropDownItemRadio from './MoviesFilterDropDownItemRadio'
import MoviesFilterDropDownItemSlider from "./MoviesFilterDropDownItemSlider";

type TProps = {
    type: string
}

const MoviesFilterDropDown: React.FC<TProps> = ({ type }) => {

    const genres: string[] = [
        'Артхаус',
        'Биография',
        'Боевики',
        'Вестерн',
        'Военные',
        'Детективы',
        'Для детей',
        'Документальные',
        'Драмы',
        'Зарубежные',
        'Исторические',
        'Катастрофы',
        'Комедии',
        'Криминал',
        'Мелодрамы',
        'Мистические',
        'Музыкальные',
        'По комиксам',
        'Приключения',
        'Русские',
        'Семейные',
        'Советские',
        'Спорт',
        'Триллеры',
        'Ужасы',
        'Фантастика',
        'Фэнтези',
    ]

    const years: string[] = [
        'Все годы',
        '2023',
        '2022',
        '2021',
        '2020',
        '2019',
        '2018',
        '2017',
        '2016',
        '2015',
        '2014',
        '2013',
        '2012',
        '2011',
        '2010',
    ]

    const countries: string[] = [
        'Россия',
        'США',
        'Великобритания',
        'Франция',
        'СССР',
        'Италия',
        'Канада',
        'Испания',
        'Германия',
        'Индия',
    ]

    const creators: string[] = [
        'Режиссер 1',
        'Режиссер 2',
        'Актер 1',
        'Актер 2',
        'Актер 3',
    ]



    let data: string[] = []
    if (type ===    'genres')      data = genres
    if (type ===    'years')       data = years
    if (type ===    'countries')   data = countries
    if (type ===    'creators')    data = creators

    return (
        <div className="filterDropdown__list-container">
            <ul className="filterDropdown__list hasSeparator">
                {['genres', 'countries', 'creators'].includes(type) && data.map(item => <MoviesFilterDropDownItemInput key={item} name={item} />)}
                {['years'].includes(type) && data.map(item => <MoviesFilterDropDownItemRadio key={item} name={item} />)}
                {['ratings'].includes(type) && <MoviesFilterDropDownItemSlider />}
            </ul>
        </div>
    )
}

export default MoviesFilterDropDown