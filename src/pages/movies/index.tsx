import React from 'react'

import '../../assets/css/movies.css'
import { Card, CategoryMovies } from './components'

const premerMoviesList = [
    {
        name: "Нюрнберг",
        id: 123,
        description:
            "За кулисами самого громкого и важного судебного процесса ХХ века разворачивается опасный заговор и одна пронзительная история любви.",
        year: 2023,
        rating: "7,4",
        country: "Россия",
        type: "Исторические",
        time: "130 минуты",
        isPaid: "Подписка",
        isRatedByIvi: false,
        textRatingByIvi: "",
        age: 18,
        urlImg:
            "https://upload.wikimedia.org/wikipedia/ru/1/17/%D0%9D%D1%8E%D1%80%D0%BD%D0%B1%D0%B5%D1%80%D0%B3_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2023%29.webp",
    },
    {
        name: "Паразит",
        id: 163,
        description:
            "Серхио прячется от разгневанного босса в шкафу, который служба достав",
        year: 2022,
        rating: "8,1",
        country: "Испания",
        type: "Драмы",
        time: "106 минуты",
        isPaid: "Подписка",
        isRatedByIvi: false,
        textRatingByIvi: "",
        age: 18,
        urlImg:
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/28acf858-a38d-4a27-be83-2eedd27684ba/600x900",
    },
]
const bestMovies = [
    {
        name: "Бойцовский клуб",
        id: 113,
        description:
            "Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности.",
        year: 1999,
        rating: "8,6",
        country: "США",
        type: "Триллеры",
        time: "133 минуты",
        isPaid: "Подписка",
        age: 18,
        isRatedByIvi: true,
        textRatingByIvi: "Выбор Иви",
        urlImg:
            "https://media.kg-portal.ru/movies/f/fightclub/posters/fightclub_1.jpg",
    },
    {
        name: "Зеленая миля",
        id: 143,
        description:
            "США, Луизина, 1935 год. В тюрьму «Холодная гора» привозят огромного чернокожего Джона Коффи, обвиненного в ужасающем преступлении. Этот необъятный гигант был найден с трупами двух девочек-близняшек на руках.",
        year: 1999,
        rating: "9,2",
        country: "США",
        type: "Драма",
        time: "188 минуты",
        isPaid: "Подписка",
        isRatedByIvi: true,
        textRatingByIvi: "Выбор Иви",
        age: 18,
        urlImg:
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/7a7f4d8d-c977-4eec-8a67-13aa024408a2/1920x",
    },
]

const MoviesPage: React.FC = () => {
    return (
        <>
            <CategoryMovies />
            <div className="moviesMain">
                <div className="PremersList">
                    <h2>Премьера фильмов</h2>
                    <div className="MoviesCards">
                        {premerMoviesList.map((movies) => (
                            <Card Imovies={movies} />
                        ))}
                    </div>
                </div>
                <div className="bestMovies">
                    <h2>Лучшие фильмы</h2>
                    <div className="MoviesCards">
                        {bestMovies.map((movies) => (
                            <Card Imovies={movies} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviesPage