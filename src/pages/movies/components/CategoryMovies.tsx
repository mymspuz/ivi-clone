import React, { useState } from "react";

const CategoryMovies: React.FC = () => {
  const [openGenre, setOpenGenre] = useState(false);
  const [openSubGenre, setOpenSubGenre] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const genresListCol1 = [
    "Артхаус",
    "Вестерн",
    "Для детей",
    "Зарубежные",
    "Комедии",
    "Мистические",
    "Приключения",
    "Советские",
    "Ужасы",
  ];
  const genresListCol2 = [
    "Биография",
    "Военные",
    "Документальные",
    "Исторические",
    "Криминал",
    "Музыкальные",
    "Русские",
    "Спорт",
    "Фантастика",
  ];
  const genresListCol3 = [
    "Боевики",
    "Детективы",
    "Драмы",
    "Катастрофы",
    "Мелодрамы",
    "По комиксам",
    "Семейные",
    "Триллеры",
    "Фэнтези",
  ];
  let active = "genreMovies";
  const [actived, setActived] = useState(false);
  if (actived) {
    active = "categoryActived";
  }
  return (
    <>
      <div className="categoryMovies">
        <div className="rootMovie">
          <a href="">Мой Иви </a>
          <span> / Фильмы</span>
          <div className="rootNameMovie">
            <h1>Фильмы</h1>
          </div>
          <div className="rootTagsMovie">
            <div className="filtersYear">
              <button>2022 год</button>
              <button className="categorySecondButton">2021 год</button>
              <button className="categorySecondButton">2020 год</button>
              <button className="categorySecondButton">2019 год</button>
              <button className="categorySecondButton">2018 год</button>
              <button className="categorySecondButton">2017 год</button>
            </div>
            <div className="filterFilms">
              <button>Русские фильмы</button>
              <button>Советские фильмы</button>
              <button>Американские фильмы</button>
            </div>
          </div>
          <div className="sortingMovieBy"></div>
        </div>
        <div className="categoryMovieMain">
          <div className="categoriesMovies">
            <ul>
              <li
                onClick={() => {
                  setOpenGenre(!openGenre);
                  setActived(!actived);
                }}
                className={active}
              >
                <div className="genreMoviesContent">
                  <p>Жанры</p>
                </div>
                {openGenre && (
                  <div className="genreDropDown">
                    <div className="dropDownHeader">
                      <div className="dropDownHeaderContent">
                        <div className="dropDownHeaderContainer">
                          <a href="">Драмы</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <a href="">Комедии</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <a href="">Боевеки</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <a href="">Триллеры</a>
                        </div>
                        <div className="dropDownHeaderContainer">
                          <a href="">Приключения</a>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="dropDownContent">
                      <div className="dropDownContentList">
                        <div className="dropDownListElements">
                          {genresListCol1.map((name, i) => (
                            <p>{name}</p>
                          ))}
                        </div>
                        <div className="dropDownListElements">
                          {genresListCol2.map((name, i) => (
                            <p>{name}</p>
                          ))}
                        </div>
                        <div className="dropDownListElements">
                          {genresListCol3.map((name, i) => (
                            <p>{name}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="subGenreMovies">
                <p>Поджанры</p>
              </li>
              <li className="countryMovies">
                <p>Страны</p>
              </li>
              <li className="yearMovies">
                <p>Годы</p>
              </li>
              <li className="ratingMovies">
                <p>Рейтинг</p>
              </li>
            </ul>
          </div>
          <div className="filtersMovies">Бесплатные</div>
          <div className="deleteOptions">
            <a className="deleteOptionsText">Cбросить фильтры</a>
          </div>
        </div>
      </div>
      <div className="openCategory"></div>
    </>
  );
};
export default CategoryMovies;
