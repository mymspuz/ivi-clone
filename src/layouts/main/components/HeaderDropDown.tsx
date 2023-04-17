import React from 'react'

import HeaderDropDownMenu from './HeaderDropDownMenu'

type TProps = {
    id: string
}

const HeaderDropDown: React.FC<TProps> = ({ id }) => {
    return (
        <HeaderDropDownMenu id={id} />
    )
}

export default HeaderDropDown

// <div className="headerDropdown notify">
//     <div className="headerDropdown__body">
//     <div className="headerDropdown__grid">
//     <div className="dropdownNotifications">
//     <div className="dropdownNotifications__noNotification">
//     <div className="dropdownNotifications__noNotificationIcon">
//     <div
// className="nbl-icon nbl-icon_pull_56"
// style={{
//     width: '56px',
//         height: '56px',
//         fontSize: '56px',
//         lineHeight: '56px',
//         color: 'rgb(255, 255, 255)'
// }}
// >
// </div>
// </div>
// <div className="dropdownNotifications__noNotificationTitle">
//     Здесь появляются
//     только важные сообщения
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>


// <div className="headerDropdown movies_menu_item">
//     <div className="headerDropdown__body">
//         <div className="headerDropdown__grid">
//             <div className="dropdownContent">
//                 <div className="dropdownContent__doubleColumn">
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Жанры</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/arthouse"
//                                 title="Смотреть фильмы артхаус онлайн">Артхаус</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/boeviki"
//                                 title="Смотреть боевики онлайн">Боевики</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/western"
//                                 title="Смотреть вестроны онлайн">Вестерн</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/voennye"
//                                 title="Смотреть военное кино онлайн">Военные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/detective"
//                                 title="Смотреть детективное кино онлайн ">Детективы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/dlya_vsej_semi"
//                                 title="Смотреть семейные фильмы онлайн">Для всей
//                                 семьи</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/detskiy"
//                                 title="Смотреть детское кино онлайн">Для детей</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/documentary"
//                                 title="Смотреть документальные фильмы онлайн">Документальные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/drama"
//                                 title="Смотреть кинодрамы онлайн">Драмы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/istoricheskie"
//                                 title="Смотреть исторические фильмы онлайн">Исторические</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/disaster"
//                                 title="Смотреть фильмы катастрофы онлайн">Катастрофы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/comedy"
//                                 title="Смотреть комедии онлайн">Комедии</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/crime"
//                                 title="Смотреть криминальные фильмы онлайн">Криминальные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/melodramy"
//                                 title="Смотреть мелодрамы онлайн">Мелодрамы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/misticheskie"
//                                 title="Смотреть мистические фильмы онлайн">Мистические</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/comics"
//                                 title="Смотреть фильмы по комиксам онлайн">По
//                                 комиксам</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/adventures"
//                                 title="Смотреть приключенческое кино онлайн">Приключения</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/sport"
//                                 title="Смотреть спортивные фильмы онлайн">Спорт</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/thriller"
//                                 title="Смотреть триллеры онлайн">Триллеры</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/horror"
//                                 title="Смотреть фильмы ужасов онлайн">Ужасы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/fantastika"
//                                 title="Смотреть фантастику онлайн">Фантастика</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/fentezi"
//                                 title="Смотреть фильмы фэнтези онлайн">Фэнтези</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dropdownContent__singleColumn">
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Страны</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/ru"
//                                 title="Смотреть русские фильмы онлайн">Русские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/foreign"
//                                 title="Смотреть зарубежные фильмы онлайн">Зарубежные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/su"
//                                 title="Смотреть советское кино онлайн">Советское
//                                 кино</a></div>
//                         </div>
//                     </div>
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Годы</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/2023"
//                                 title="Смотреть фильмы 2023 года онлайн">Фильмы 2023
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/2022"
//                                 title="Смотреть фильмы 2022 года онлайн">Фильмы 2022
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/2021"
//                                 title="Смотреть фильмы 2021 года онлайн">Фильмы 2021
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/movies/2020"
//                                 title="Смотреть фильмы 2020 года онлайн">Фильмы 2020
//                                 года</a></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dropdownContent__sideContent">
//                     <div
//                         className="nbl-tabs nbl-tabs_variation_molku nbl-tabs_style_rose nbl-tabs_hasNativeScroll dropdownContent__nbl-tabs">
//                         <div className="nbl-tabs__inner">
//                             <div className="nbl-tabs__gutter">
//                                 <div className="nbl-tabs__gutterStripe"
//                                      style={{height: '20px', transform: 'translateY(0px)'}}></div>
//                             </div>
//                             <a className="nbl-tabsItem nbl-tabs__nbl-tabsItem nbl-tabsItem_selected"
//                                href="https://www.ivi.ru/new/movie-new"
//                                title="Смотреть новинки">
//                                 <div className="nbl-tabsItem__textBlock">
//                                     <div className="nbl-tabsItem__captionRow">
//                                         <div className="nbl-tabsItem__caption">Новинки
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                    href="https://www.ivi.ru/collections"
//                                    title="Подборки">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Подборки
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready"
//                                title="Иви.Рейтинг">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Иви.Рейтинг
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/new/soon-ivi"
//                                title="Смотреть скоро на Иви">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Скоро на
//                                         Иви
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/trailers"
//                                title="Смотреть трейлеры">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Трейлеры
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/goodmovies"
//                                title="Что посмотреть">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Что
//                                         посмотреть
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/movies-hd"
//                                title="Смотреть фильмы в HD онлайн">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Фильмы в HD
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/vyibor-ivi"
//                                title="Выбор Иви">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Выбор Иви
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection"
//                                title="Новинки подписки">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Новинки
//                                         подписки
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/filmyi-amediateka"
//                                title="Фильмы Amediateka">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Фильмы
//                                         Amediateka
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/best-movies"
//                                title="Популярные фильмы">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Популярные
//                                         фильмы
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/ivi-originals"
//                                title="Фильмы Иви">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Фильмы Иви
//                                     </div>
//                                 </div>
//                             </div>
//                         </a></div>
//                     </div>
//                     <div
//                         className="dropdownContent__sideContentWidget dropdownContent__sideContentWidget">
//                         <div
//                             className="nbl-subscriptionTeaser nbl-subscriptionTeaser_hasAnimation nbl-subscriptionTeaser_isShownElements">
//                             <div className="nbl-subscriptionTeaser__posterBlock">
//                                 <div
//                                     className="nbl-subscriptionTeaser__posterBlockWrapper"
//                                     //style="--posters-count:10;"
//                                 >
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                            href="/watch/506055">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage6/contents/e/e/f45510cadb236a7ef2ec1c4b503e3e.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504121">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage23/contents/4/9/cff474cf1021d15a0bd3ee5edb6dbf.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/474934">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/7/f/6995ed12714c9d6be4b191494123e7.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504177">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage33/contents/6/b/ad0776e1c421a1789d423cbb5fcc05.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/497934">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/c/0/450a20a46a872c0be2e3f8f405b730.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/502077">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/b/9/6f769044188519e5b50bf082b69ec7.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/503397">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage38/contents/b/6/bdf3c1576cb29d0168dcc9ac261f07.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504522">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage29/contents/f/a/7b9ca2b4f8b19b78370b39394bc746.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504203">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage30/contents/e/4/51f60917dd234d5663f2d64db3cc34.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/509517">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/e/2/f47fbe3a6c17a1773fa472ab0e5f58.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/506055">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/e/e/f45510cadb236a7ef2ec1c4b503e3e.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504121">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage23/contents/4/9/cff474cf1021d15a0bd3ee5edb6dbf.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/474934">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/7/f/6995ed12714c9d6be4b191494123e7.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                            href="/watch/503408">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/506249">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504248">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/502083">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage29/contents/4/d/6a49825e0acd92abc38a77b880c046.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504518">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/5/f/19c40f1e16b60642d64eb04296f73c.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/506533">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/0/e/4a53c1b4bbb8b12081d7eb62c395bd.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/508505">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage31/contents/4/6/76a9e0b320115aa54d7dc84af6ec0d.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504120">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/0/9/da03b947c85a5401a70e62249e2b51.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/500728">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/4/b/b85fca1d2bac8f9e84fee8345530d2.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/501021">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage3/contents/0/4/5a1d322912c1e1d5730ac045f4189c.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/503408">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/9/8/50ada319d6a64b13b668031ec4571d.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/506249">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/5/f/1b733f1603eb9e0ce7446d06032b3b.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504248">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage30/contents/2/1/237c79ac18ab25e66d45f07378c3cb.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                            href="/watch/503400">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/509590">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/502084">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/505996">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/5/c/f0f2a0157c970bf5dfa4c9792f4f8d.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504637">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage38/contents/c/1/9a226d400475c4cf4d142e72fb478f.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/504199">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/5/f/44a17b753786fca4268a0682479888.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/498500">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/5/1/c563d1ac2534cda357165503fad820.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/506252">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/8/f/a994322549791d967d55029291f89d.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/492960">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage30/contents/7/9/e82835fba14b23e57bc794a54c3f7a.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/498267">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/c/b/fef4aab9acd803353d140bcb5f2556.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/503400">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage33/contents/1/5/53c93d3d17c54076544ad2273b2d86.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/509590">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage5/contents/d/4/7d0ababc31e2d7b6a85fc7760c9741.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/502084">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/2/b/6c4e058eecc7fdd08d8040fb46344a.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                 </div>
//                             </div>
//                             <div className="nbl-subscriptionTeaser__leftFade"></div>
//                             <div className="nbl-subscriptionTeaser__rightFade"></div>
//                             <div className="nbl-subscriptionTeaser__bottomPanel">
//                                 <div
//                                     className="nbl-subscriptionTeaser__bottomFade"></div>
//                                 <div className="nbl-subscriptionTeaser__detailsBlock">
//                                     <div
//                                         className="nbl-subscriptionBadge nbl-subscriptionBadge_size_azom nbl-subscriptionBadge_brand_ivi nbl-subscriptionBadge_style_linus nbl-subscriptionTeaser__nbl-subscriptionBadge">
//                                         <div
//                                             className="nbl-subscriptionBadge__logo"></div>
//                                     </div>
//                                     <div
//                                         className="nbl-subscriptionTeaser__detailsTextBlock">
//                                         <div
//                                             className="nbl-subscriptionTeaser__detailsTitle">Подписка
//                                             Иви
//                                         </div>
//                                         <div
//                                             className="nbl-subscriptionTeaser__detailsExtra">От
//                                             199&nbsp;₽ за месяц
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="nbl-subscriptionTeaser__buttonWrapper">
//                                     <button
//                                         className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_cyrax nbl-button_hasBadge_0 nbl-subscriptionTeaser__nbl-button">
//                                         <div
//                                             className="nbl-button__primaryText">Подключить
//                                         </div>
//                                     </button>
//                                 </div>
//                                 <div className="nbl-subscriptionTeaser__note">Отключить
//                                     можно в любой момент
//                                 </div>
//                             </div>
//                         </div>
//                         <a className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_withIcon nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
//                            href="https://www.ivi.ru/pages/tvsmart/">
//                             <div className="nbl-button__primaryText">
//                                 <div
//                                     className="nbl-icon nbl-icon_smartTvPromo_16 nbl-button__nbl-icon"></div>
//                                 Смотреть на SmartTV
//                             </div>
//                         </a></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


// <div className="headerDropdown series_menu_item">
//     <div className="headerDropdown__body">
//         <div className="headerDropdown__grid">
//             <div className="dropdownContent">
//                 <div className="dropdownContent__doubleColumn">
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Жанры</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/biography"
//                                 title="Смотреть биографические сериалы онлайн">Биография</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/boeviki"
//                                 title="Смотреть сериалы в жанре боевики онлайн">Боевики</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/voennye"
//                                 title="Смотреть военные сериалы онлайн">Военные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/detective"
//                                 title="Смотреть детективные сериалы онлайн">Детективы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/dlya_vsej_semi"
//                                 title="Смотреть семейные сериалы онлайн">Для всей
//                                 семьи</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/documentary"
//                                 title="Смотреть документальные сериалы онлайн">Документальные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/doramy"
//                                 title="Смотреть фильмы дорамы онлайн">Дорамы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/dramy"
//                                 title="Смотреть драматические сериалы онлайн">Драмы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/history"
//                                 title="Смотреть исторические сериалы онлайн">Исторические</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/comedy"
//                                 title="Смотреть комедийные сериалы онлайн">Комедийные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/crime"
//                                 title="Смотреть криминальные сериалы онлайн">Криминальные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/medicine"
//                                 title="Смотреть фильмы медицинские онлайн">Медицинские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/melodramyi"
//                                 title="Смотреть сериалы в жанре мелодрамы онлайн">Мелодрамы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/misticheskie"
//                                 title="Смотреть мистические сериалы онлайн">Мистические</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/adventures"
//                                 title="Смотреть приключенческие сериалы онлайн">Приключения</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/romanticheskie"
//                                 title="Смотреть романтические сериалы онлайн">Романтические</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/tvshow"
//                                 title="Смотреть телешоу онлайн">Телешоу</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/thriller"
//                                 title="Смотреть сериалы триллеры онлайн">Триллеры</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/turetskie"
//                                 title="Смотреть фильмы турецкие онлайн">Турецкие</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/horror"
//                                 title="Смотреть сериалы в жанре ужасы онлайн">Ужасы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/scifi"
//                                 title="Смотреть фантастические сериалы онлайн">Фантастические</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/fantasy"
//                                 title="Смотреть сериалы фэнтези онлайн">Фэнтези</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dropdownContent__singleColumn">
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Страны</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/ru"
//                                 title="Русские сериалы онлайн">Русские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/foreign"
//                                 title="Зарубежные сериалы онлайн">Зарубежные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/us"
//                                 title="Американские сериалы онлайн">Американские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/ua"
//                                 title="Украинские сериалы онлайн">Украинские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/kr"
//                                 title="Корейские сериалы онлайн">Корейские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/tr"
//                                 title="Турецкие сериалы онлайн">Турецкие</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Годы</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/2023"
//                                 title="Смотреть сериалы 2023 онлайн">Сериалы 2023
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/2022"
//                                 title="Смотреть сериалы 2022 онлайн">Сериалы 2022
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/2021"
//                                 title="Смотреть сериалы 2021 онлайн">Сериалы 2021
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/series/2020"
//                                 title="Смотреть сериалы 2020 онлайн">Сериалы 2020
//                                 года</a></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dropdownContent__sideContent">
//                     <div
//                         className="nbl-tabs nbl-tabs_variation_molku nbl-tabs_style_rose nbl-tabs_hasNativeScroll dropdownContent__nbl-tabs">
//                         <div className="nbl-tabs__inner">
//                             <div className="nbl-tabs__gutter">
//                                 <div className="nbl-tabs__gutterStripe"
//                                      style={{ height: '20px', transform: 'translateY(0px)'}}></div>
//                             </div>
//                             <a className="nbl-tabsItem nbl-tabsItem_selected nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/new/series-new"
//                                title="Смотреть новинки">
//                                 <div className="nbl-tabsItem__textBlock">
//                                     <div className="nbl-tabsItem__captionRow">
//                                         <div className="nbl-tabsItem__caption">Новинки
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                    href="https://www.ivi.ru/series/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready"
//                                    title="Иви.Рейтинг">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Иви.Рейтинг
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/series-hd"
//                                title="Смотреть сериалы в HD онлайн">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Сериалы в
//                                         HD
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/tvshow-free?sort=new"
//                                title="Бесплатные сериалы">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Бесплатные
//                                         сериалы
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/serialyi-amediateka"
//                                title="Сериалы Amediateka">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Сериалы
//                                         Amediateka
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/series-paramount-play"
//                                title="Сериалы Paramount Play">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Сериалы
//                                         Paramount Play
//                                     </div>
//                                 </div>
//                             </div>
//                         </a></div>
//                     </div>
//                     <div
//                         className="dropdownContent__sideContentWidget dropdownContent__sideContentWidget">
//                         <div
//                             className="nbl-subscriptionTeaser nbl-subscriptionTeaser_hasAnimation nbl-subscriptionTeaser_isShownElements">
//                             <div className="nbl-subscriptionTeaser__posterBlock">
//                                 <div
//                                     className="nbl-subscriptionTeaser__posterBlockWrapper"
//                                     // style="--posters-count:10;"
//                                 >
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/i-snova-zdravstvujte">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage33/contents/0/3/00ac5cb403a3940adb58f626e118a5.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/protiv-vseh">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/e/8/2b4e7b9b5772409d93378defc76952.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/semya-2023">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage28/contents/1/b/8b2349835d6cce669daf4e042ffe18.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/akusher">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/7/a/bd738c0827eaf1c3fbf8db84cd9fbc.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/pravosudie-2021">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage38/contents/f/a/a25381d01e30e5a608e8039cdaee15.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/sled">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage37/contents/2/2/698f28968cdc928d009538cfbca520.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/lyubov-razum-mest">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/d/2/54e2284df9981527ed7dbb110c34c2.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/skazka-na-ostrove">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/b/9/6e42951d4ce5d629db11c35fd8997c.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/hochu-ne-mogu-2023">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/f/9/458a15d9a66341a6b30102aca93937.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/olive-i-robotyi">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage8/contents/8/b/8b6b69cbd7177ac06a17a49e6baba8.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/i-snova-zdravstvujte">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage33/contents/0/3/00ac5cb403a3940adb58f626e118a5.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/protiv-vseh">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/e/8/2b4e7b9b5772409d93378defc76952.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/semya-2023">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage28/contents/1/b/8b2349835d6cce669daf4e042ffe18.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/spletnitsa-amediateka">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage30/contents/b/4/8af6e033360721b77cb7c44c5bb66f.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/severnaya-mafiya">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage8/contents/8/e/e25f7417b57f677d7ad15a602effc4.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/najdi-menya">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/6/7/7714c9c22b5362c87ee568bb7cf4b0.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/predposlednyaya-instantsiya">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/7/7/ea28fa70d950a22acaf66fa12ba2c8.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/vetrenyij">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage28/contents/9/7/78f3d7104794a90b154f24e7a14787.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/chukur">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage39/contents/a/b/80607619fe3e9e0bc2f2f850b2dd28.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/skoraya-pomosch-2018">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/2/4/99965b22ea3800ef64e23a23c68036.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/mr-wrong">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/d/d/3ab979189a0dc825dfda28e3d16438.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/bogatyie-tozhe-plachut">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/3/c/74b4a3fc0ff82e2b3b8d9b4df1b6ac.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/doch-posla">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage29/contents/8/7/91d8465c8a8c834124c27a7cd7d575.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/spletnitsa-amediateka">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage30/contents/b/4/8af6e033360721b77cb7c44c5bb66f.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/severnaya-mafiya">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage8/contents/8/e/e25f7417b57f677d7ad15a602effc4.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/najdi-menya">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/6/7/7714c9c22b5362c87ee568bb7cf4b0.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                            href="/watch/tihaya-gavan">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage38/contents/1/7/7df92849979535b5cf2accd81a1c9b.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/ubijstvo-po-frejdu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage4/contents/d/e/7e0a8fad19e1a5811ffdf54fbd352e.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/igra-na-udachu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/d/8/2485ce3448032a6504d0b63c7ef80c.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/besprintsipnyie-2020">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/0/a/adc2359568ffa48e284713dbc0fc68.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/lyubov-napokaz">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage5/contents/8/6/e05a0105a327a1d84abd4a1a606a22.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/lihach">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage37/contents/5/2/afc27c071ae6640c15b6a81fdbb03b.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/13-ya-klinicheskaya">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage33/contents/a/4/68da9ed86c88583cea8dc7881a623b.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/magellan-povelitel-morej">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage37/contents/6/2/73cf43a5d02cc362b18d427408a824.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/himera">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage39/contents/2/7/41159eb0c8cfa0d42d66ac50960c67.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/po-zakonam-voennogo-vremeni">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage33/contents/0/4/1405fdd72b621a061d7989b25fb20f.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/tihaya-gavan">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage38/contents/1/7/7df92849979535b5cf2accd81a1c9b.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/ubijstvo-po-frejdu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage4/contents/d/e/7e0a8fad19e1a5811ffdf54fbd352e.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/igra-na-udachu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/d/8/2485ce3448032a6504d0b63c7ef80c.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                 </div>
//                             </div>
//                             <div className="nbl-subscriptionTeaser__leftFade"></div>
//                             <div className="nbl-subscriptionTeaser__rightFade"></div>
//                             <div className="nbl-subscriptionTeaser__bottomPanel">
//                                 <div
//                                     className="nbl-subscriptionTeaser__bottomFade"></div>
//                                 <div className="nbl-subscriptionTeaser__detailsBlock">
//                                     <div
//                                         className="nbl-subscriptionBadge nbl-subscriptionBadge_size_azom nbl-subscriptionBadge_brand_ivi nbl-subscriptionBadge_style_linus nbl-subscriptionTeaser__nbl-subscriptionBadge">
//                                         <div
//                                             className="nbl-subscriptionBadge__logo"></div>
//                                     </div>
//                                     <div
//                                         className="nbl-subscriptionTeaser__detailsTextBlock">
//                                         <div
//                                             className="nbl-subscriptionTeaser__detailsTitle">Подписка
//                                             Иви
//                                         </div>
//                                         <div
//                                             className="nbl-subscriptionTeaser__detailsExtra">От
//                                             199&nbsp;₽ за месяц
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="nbl-subscriptionTeaser__buttonWrapper">
//                                     <button
//                                         className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_cyrax nbl-button_hasBadge_0 nbl-subscriptionTeaser__nbl-button">
//                                         <div
//                                             className="nbl-button__primaryText">Подключить
//                                         </div>
//                                     </button>
//                                 </div>
//                                 <div className="nbl-subscriptionTeaser__note">Отключить
//                                     можно в любой момент
//                                 </div>
//                             </div>
//                         </div>
//                         <a className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_withIcon nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
//                            href="https://www.ivi.ru/pages/tvsmart/">
//                             <div className="nbl-button__primaryText">
//                                 <div
//                                     className="nbl-icon nbl-icon_smartTvPromo_16 nbl-button__nbl-icon"></div>
//                                 Смотреть на SmartTV
//                             </div>
//                         </a></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


// <div className="headerDropdown animation_menu_item">
//     <div className="headerDropdown__body">
//         <div className="headerDropdown__grid">
//             <div className="dropdownContent">
//                 <div className="dropdownContent__doubleColumn">
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Жанры</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/anime"
//                                 title="Смотреть аниме мультфильм онлайн">Аниме</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/militants"
//                                 title="Смотреть фильмы боевик онлайн">Боевик</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/detective"
//                                 title="Смотреть фильмы детектив онлайн">Детектив</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/vzroslye"
//                                 title="Смотреть мультфильмы для взрослых онлайн">Для
//                                 взрослых</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/dlya_vsej_semi"
//                                 title="Смотреть семейные мультфильмы онлайн">Для всей
//                                 семьи</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/detskie"
//                                 title="Смотреть детские мультики онлайн">Для детей</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/drama"
//                                 title="Смотреть фильмы драма онлайн">Драма</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/history"
//                                 title="Смотреть фильмы история онлайн">История</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/comedy"
//                                 title="Смотреть фильмы комедия онлайн">Комедия</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/crime"
//                                 title="Смотреть фильмы криминал онлайн">Криминальные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/musical"
//                                 title="Смотреть фильмы мюзикл онлайн">Мюзикл</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/polnometrazhnye"
//                                 title="Смотреть полнометражные мультики онлайн">Полнометражные</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/adventure"
//                                 title="Смотреть приключенческие мультфильмы онлайн">Приключения</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/razvivayuschie"
//                                 title="Смотреть развивающие мультфильмы онлайн">Развивающие</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/serialy"
//                                 title="Смотреть анимационные сериалы онлайн">Сериалы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/sport"
//                                 title="Смотреть фильмы спорт онлайн">Спорт</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/thriller"
//                                 title="Смотреть фильмы триллеры онлайн">Триллер</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/horror"
//                                 title="Смотреть фильмы ужасы онлайн">Ужасы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/fantastic"
//                                 title="Смотреть фантастические мультфильмы онлайн">Фантастика</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/fantasy"
//                                 title="Смотреть мультфильмы фэнтези онлайн">Фэнтези</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dropdownContent__singleColumn">
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Страны</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/su"
//                                 title="Советские мультики онлайн">Советские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/ru"
//                                 title="Русские российские мультики">Русские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/us"
//                                 title="Американские мультики онлайн">Американские</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/foreign"
//                                 title="Зарубежные мультики онлайн">Зарубежные</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">Годы</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/2023"
//                                 title="Смотреть мультфильмы 2023 года онлайн">Мультики
//                                 2023
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/2022"
//                                 title="Смотреть мультфильмы 2022 года онлайн">Мультики
//                                 2022
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/2021"
//                                 title="Смотреть мультфильмы 2021 года онлайн">Мультики
//                                 2021
//                                 года</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/animation/2020"
//                                 title="Смотреть мультфильмы 2020 года онлайн">Мультики
//                                 2020
//                                 года</a></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dropdownContent__sideContent">
//                     <div
//                         className="nbl-tabs nbl-tabs_variation_molku nbl-tabs_style_rose nbl-tabs_hasNativeScroll dropdownContent__nbl-tabs">
//                         <div className="nbl-tabs__inner">
//                             <div className="nbl-tabs__gutter">
//                                 <div className="nbl-tabs__gutterStripe"
//                                      style={{height: '20px', transform: 'translateY(0px)'}}></div>
//                             </div>
//                             <a className="nbl-tabsItem nbl-tabsItem_selected nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/new/animation-new"
//                                title="Смотреть новые мультики онлайн">
//                                 <div className="nbl-tabsItem__textBlock">
//                                     <div className="nbl-tabsItem__captionRow">
//                                         <div className="nbl-tabsItem__caption">Новинки
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                    href="https://www.ivi.ru/collections/cartoons-hd"
//                                    title="Смотреть мультфильмы в HD онлайн">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Мультики в
//                                         HD
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/animation-paramount-play"
//                                title="Мультфильмы Paramount Play / Nickelodeon">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Мультфильмы
//                                         Paramount Play / Nickelodeon
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/dreamworks-cartoons"
//                                title="Мультфильмы студии «Dreamworks»">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Мультфильмы
//                                         Dreamworks
//                                     </div>
//                                 </div>
//                             </div>
//                         </a><a className="nbl-tabsItem nbl-tabs__nbl-tabsItem"
//                                href="https://www.ivi.ru/collections/ctc-kids"
//                                title="Мультфильмы СТС Kids">
//                             <div className="nbl-tabsItem__textBlock">
//                                 <div className="nbl-tabsItem__captionRow">
//                                     <div className="nbl-tabsItem__caption">Мультфильмы
//                                         СТС Kids
//                                     </div>
//                                 </div>
//                             </div>
//                         </a></div>
//                     </div>
//                     <div
//                         className="dropdownContent__sideContentWidget dropdownContent__sideContentWidget">
//                         <div
//                             className="nbl-subscriptionTeaser nbl-subscriptionTeaser_hasAnimation nbl-subscriptionTeaser_isShownElements">
//                             <div className="nbl-subscriptionTeaser__posterBlock">
//                                 <div
//                                     className="nbl-subscriptionTeaser__posterBlockWrapper"
//                                     // style="--posters-count:10;"
//                                 >
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                            href="/watch/427934">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage26/contents/d/8/bdc43d82f687b08fb6beba2bb248fe.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/tsvetnyashki">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage23/contents/e/5/5d053ae43492633643c5958ab431bc.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/cherepashki">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/f/4/c3a43b5ffdfbed575294e5c29527eb.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/akademiya-sverhestestvennogo">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage26/contents/e/8/26997cf51b0fd7cc32647c716ba563.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/gerojchiki">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage8/contents/5/a/12da2c16df9428296df918bb1413cc.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/498268">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/1/a/45fe781b43e701a076424db22033f8.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/494515">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage39/contents/9/d/0974d0c1482aa0d41acdc29dbec752.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/bodo-borodo">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage30/contents/d/2/722ca040ba4228c9911c0b3c82a193.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/498262">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/e/1/1cd583be8f86d9b5836b03cdf9164b.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/213844">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage31/contents/e/4/f91db2d8919af763a79487f598e2f5.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/427934">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage26/contents/d/8/bdc43d82f687b08fb6beba2bb248fe.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/tsvetnyashki">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage23/contents/e/5/5d053ae43492633643c5958ab431bc.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/cherepashki">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage6/contents/f/4/c3a43b5ffdfbed575294e5c29527eb.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                            href="/watch/drakoshiya">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage26/contents/2/7/1ac256f721c986549656d3ee890f49.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/volshebnaya-devochka-kung-fu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage38/contents/f/1/4c360cce1550dcd497493927b27539.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/216783">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/5/6/5da0e0bca5c9c1d8e609ccb65100e0.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/488013">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage28/contents/a/3/6fd8816ff159cd83df5ed93a44c56d.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/uletnaya-dostavka">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage33/contents/b/2/59161ab7871a71956b0d895de1f002.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/438277">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/a/6/30ebce1822ed98c7b8d2a975d45dbb.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/salon-dyadyushki-breda">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/3/0/35055884d6fa8582d234c33b304f88.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/smash">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/9/e/b1aa4e84b3fe92fcc48c3dc4b8020b.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/chuch-myauch">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/c/5/a820f0b09898d5a841ff0917e83931.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/komanda-match">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage26/contents/5/3/1defd647a613dcc2f27548e9869cc3.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/drakoshiya">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage26/contents/2/7/1ac256f721c986549656d3ee890f49.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/volshebnaya-devochka-kung-fu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage38/contents/f/1/4c360cce1550dcd497493927b27539.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/216783">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/5/6/5da0e0bca5c9c1d8e609ccb65100e0.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                     <div className="nbl-subscriptionTeaser__posterLane">
//                                         <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                            href="/watch/493548">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage37/contents/0/f/961a965937041d0a1683aa8bf23c0c.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/498521">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/c/7/fb2d96348d5af1467113b5a2d713ee.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/leks-i-plu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage23/contents/9/f/71bf80f9d6652bfa5d541dabf541b7.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/raskraska-s-malyisharikami">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/d/2/75514dfa3f92808981d8b90503a7b4.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/rej-i-pozharnyij-patrul-komanda-vivilz">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage9/contents/2/0/b715f85fea1b5a7d8ef02a432f16e7.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/498261">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage23/contents/d/c/c75a6d97991568b3579c8374adeb01.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/enotki">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage30/contents/0/4/29a85eefb025295464230fb71e6d57.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/super-myau">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/d/8/1376f9c6e83c1388a83320989551ac.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/505998">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage37/contents/8/4/57ba2299f3265b5d7781c79dc2fed2.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/491956">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage2/contents/8/4/c902f1974b6a7a8defc345ff162f3a.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/493548">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage37/contents/0/f/961a965937041d0a1683aa8bf23c0c.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/498521">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage15/contents/c/7/fb2d96348d5af1467113b5a2d713ee.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a><a
//                                         className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                         href="/watch/leks-i-plu">
//                                         <div className="nbl-poster__imageWrapper"><img
//                                             className="nbl-poster__image"
//                                             data-stub="false"
//                                             src="https://thumbs.dfs.ivi.ru/storage23/contents/9/f/71bf80f9d6652bfa5d541dabf541b7.jpg/256x144/?q=85" />
//                                         </div>
//                                     </a></div>
//                                 </div>
//                             </div>
//                             <div className="nbl-subscriptionTeaser__leftFade"></div>
//                             <div className="nbl-subscriptionTeaser__rightFade"></div>
//                             <div className="nbl-subscriptionTeaser__bottomPanel">
//                                 <div
//                                     className="nbl-subscriptionTeaser__bottomFade"></div>
//                                 <div className="nbl-subscriptionTeaser__detailsBlock">
//                                     <div
//                                         className="nbl-subscriptionBadge nbl-subscriptionBadge_size_azom nbl-subscriptionBadge_brand_ivi nbl-subscriptionBadge_style_linus nbl-subscriptionTeaser__nbl-subscriptionBadge">
//                                         <div
//                                             className="nbl-subscriptionBadge__logo"></div>
//                                     </div>
//                                     <div
//                                         className="nbl-subscriptionTeaser__detailsTextBlock">
//                                         <div
//                                             className="nbl-subscriptionTeaser__detailsTitle">Подписка
//                                             Иви
//                                         </div>
//                                         <div
//                                             className="nbl-subscriptionTeaser__detailsExtra">От
//                                             199&nbsp;₽ за месяц
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="nbl-subscriptionTeaser__buttonWrapper">
//                                     <button
//                                         className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_cyrax nbl-button_hasBadge_0 nbl-subscriptionTeaser__nbl-button">
//                                         <div
//                                             className="nbl-button__primaryText">Подключить
//                                         </div>
//                                     </button>
//                                 </div>
//                                 <div className="nbl-subscriptionTeaser__note">Отключить
//                                     можно в любой момент
//                                 </div>
//                             </div>
//                         </div>
//                         <a className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_withIcon nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
//                            href="https://www.ivi.ru/pages/tvsmart/">
//                             <div className="nbl-button__primaryText">
//                                 <div
//                                     className="nbl-icon nbl-icon_smartTvPromo_16 nbl-button__nbl-icon"></div>
//                                 Смотреть на SmartTV
//                             </div>
//                         </a></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


// <div className="headerDropdown tvplus_menu_item">
//     <div className="headerDropdown__body">
//         <div className="headerDropdown__grid">
//             <div className="dropdownTv">
//                 <div className="dropdownTv__sideContent">
//                     <div className="dropdownLinksList">
//                         <div className="dropdownLinksList__title">ТВ онлайн</div>
//                         <div className="dropdownLinksList__list">
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/tvplus/tvchannels"
//                                 title="Смотреть ТВ каналы онлайн">ТВ-каналы</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/tvplus/razvlekatelnoe"
//                                 title="Смотреть развлекательное ТВ онлайн">Развлекательное</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/tvplus/deti"
//                                 title="Смотреть передачи для детей онлайн">Дети</a>
//                             </div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/tvplus/sport"
//                                 title="Смотреть спортивное ТВ онлайн">Спортивное
//                                 ТВ</a></div>
//                             <div className="dropdownLinksList__item"><a
//                                 className="nbl-link nbl-link_style_reska"
//                                 href="https://www.ivi.ru/tvplus/documentalnoe"
//                                 title="Смотреть документальное ТВ онлайн">Документальное</a>
//                             </div>
//                         </div>
//                     </div>
//                     <a className="nbl-button nbl-button_textAlign_center nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
//                        href="https://www.ivi.ru/tvplus/tv-schedule-today">
//                         <div className="nbl-button__primaryText">Телепрограмма</div>
//                     </a></div>
//                 <div className="dropdownTv__mainContent">
//                     <div className="dropdownTv__mainContentInner">
//                         <div className="dropdownTv__mainContentPopulars">
//                             <div className="dropdownTvPopular">
//                                 <div className="dropdownTvPopular__title">Федеральные
//                                     каналы
//                                 </div>
//                                 <div className="gallery gallery gallery_ivi-carousel">
//                                     <div className="gallery__carousel">
//                                         <div className="gallery__viewport">
//                                             <div className="gallery__viewport-inner">
//                                                 <div className="ivi-carousel">
//                                                     <div
//                                                         className="ivi-carousel-viewport">
//                                                         <div
//                                                             className="ivi-carousel-container">
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{width: '88.1538px', paddingRight: '16px'}}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/1tv">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage2/contents/5/5/f1e86a30aa3728b2b939bb60a3e204.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px'}}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/russia1">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage23/contents/5/e/24b2db1593647813cc3189270023e8.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px'}}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/match-tv">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage39/contents/6/3/94247f8de64c29e262c4cb828bbd40.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/ntv">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage4/contents/2/3/c3862f7e847f614447a942101fa6ea.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/5tv">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage28/contents/4/7/5257a323a5973d1fba6c2c7c732df5.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/russia-k">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage37/contents/6/2/0c7666fb8fe6e9212642e35a4cab79.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/russia24">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage39/contents/3/f/539284adaee9d9295f74bd00f01926.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/karusel">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/otr">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/tvc">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/ren-tv">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/spas">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/sts">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/domashniy">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/tv3">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/friday">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/zvezda">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/mir">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/tnt">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/muz-tv">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         className="ivi-carousel__shadow_right"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="dropdownTvPopular">
//                                 <div className="dropdownTvPopular__title">Спортивные
//                                     каналы
//                                 </div>
//                                 <div className="gallery gallery gallery_ivi-carousel">
//                                     <div className="gallery__carousel">
//                                         <div className="gallery__viewport">
//                                             <div className="gallery__viewport-inner">
//                                                 <div className="ivi-carousel">
//                                                     <div
//                                                         className="ivi-carousel-viewport">
//                                                         <div
//                                                             className="ivi-carousel-container">
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/match-premer">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage6/contents/5/9/4fa4866036f6fe0e6fc7c58fca95c2.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/futbol-1">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage3/contents/3/2/4e4d68075ba795577fa382d103c9b2.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/futbol-2">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage2/contents/b/f/3877f4b24f1e88c7d71b8bdd6332c9.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/futbol-3">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage31/contents/2/2/13fb97b2e454ae0bc0e45ef07b2ffc.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/match-boec">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage28/contents/0/b/8636562ba22dae82bb74dda8ab630c.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/khl-tv-hd">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage31/contents/9/8/93f16bed265ece28ac71d41fc57350.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/start">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="false"
//                                                                                 src="https://thumbs.dfs.ivi.ru/storage23/contents/4/2/48ff532cc07704f5510b5f24ff384a.jpg/182x118/?q=85" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/khl-tv">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/match-igra">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/match-arena">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '88.1538px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownTvPopular__item">
//                                                                     <a
//                                                                         className="nbl-poster nbl-poster_type_broadcastThumb"
//                                                                         href="https://www.ivi.ru/tvchannels/watch/match-strana">
//                                                                         <div
//                                                                             className="nbl-poster__imageWrapper">
//                                                                             <img
//                                                                                 className="nbl-poster__image"
//                                                                                 data-stub="true"
//                                                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         className="ivi-carousel__shadow_right"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="dropdownBroadcastPopular">
//                                 <div
//                                     className="dropdownBroadcastPopular__title">Популярные
//                                     трансляции
//                                 </div>
//                                 <div className="gallery gallery gallery_ivi-carousel">
//                                     <div className="gallery__carousel">
//                                         <div className="gallery__viewport">
//                                             <div className="gallery__viewport-inner">
//                                                 <div className="ivi-carousel">
//                                                     <div
//                                                         className="ivi-carousel-viewport">
//                                                         <div
//                                                             className="ivi-carousel-container">
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7864">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage38/contents/5/f/a4335ced8ad93106b00e471a983ef1.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Енисей
//                                                                                             —
//                                                                                             Балтика
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 11:25</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7867">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage15/contents/9/0/52e1fdaf18ef2767ed78b54b33c730.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Сувон
//                                                                                             —
//                                                                                             Чеджу
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 07:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7870">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage8/contents/a/6/a753ff6e452069fdace50917d79bef.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Шальке
//                                                                                             04
//                                                                                             —
//                                                                                             Герта
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Сегодня 21:25</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7871">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage29/contents/0/d/67e2be591905ab2ff3a292f4c099ad.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Бавария
//                                                                                             —
//                                                                                             Хоффенхайм
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 16:25</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7876">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage4/contents/c/9/84f27ba45305d609985b10ce1ed646.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Алания
//                                                                                             —
//                                                                                             Волгарь
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Сегодня 18:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7883">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage8/contents/b/d/430dd527d78813ed82e20cbe460a21.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Кремонезе
//                                                                                             –
//                                                                                             Эмполи
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Сегодня 19:25</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7884">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage39/contents/2/0/c9381d59f75c41e536fa3ff88eac6d.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Специя
//                                                                                             –
//                                                                                             Лацио
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Сегодня 21:40</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7885">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage3/contents/c/9/b94b5845698129565f92abd50cdd47.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Болонья
//                                                                                             –
//                                                                                             Милан
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 15:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7886">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage6/contents/5/0/d3009dff6896d44b0eb1f4de67deba.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Наполи
//                                                                                             –
//                                                                                             Верона
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 18:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7890">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage30/contents/d/d/55d77743362e90cfff283ee323e078.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Крылья
//                                                                                             Советом
//                                                                                             –
//                                                                                             Химки
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 13:45</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7891">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage4/contents/5/2/04607bb73c0403e6687a8d9876ceb5.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Динамо
//                                                                                             –
//                                                                                             Пари
//                                                                                             НН
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 13:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7892">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage33/contents/1/2/8c2f980871f505f7291b9b2352dff6.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Урал
//                                                                                             –
//                                                                                             ЦСКА
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 16:15</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7893">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage39/contents/1/f/8f39e52d93a9f467596ebc4f551e90.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Сочи
//                                                                                             –
//                                                                                             Краснодар
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 16:25</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7894">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage28/contents/5/7/842fe0cdcf9749ccd45a26d05afcac.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Торпедо
//                                                                                             –
//                                                                                             Спартак
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 18:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Футбол</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7898">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage26/contents/b/d/430dd527d78813ed82e20cbe460a21.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Кремонезе
//                                                                                             —
//                                                                                             Эмполи
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Сегодня 19:25</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7899">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage30/contents/2/0/c9381d59f75c41e536fa3ff88eac6d.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Специя
//                                                                                             —
//                                                                                             Лацио
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Сегодня 21:40</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7900">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage4/contents/c/9/b94b5845698129565f92abd50cdd47.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Болонья
//                                                                                             —
//                                                                                             Милан
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 15:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7901">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage28/contents/5/0/d3009dff6896d44b0eb1f4de67deba.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Наполи
//                                                                                             —
//                                                                                             Верона
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 18:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '16px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7905">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage30/contents/5/2/04607bb73c0403e6687a8d9876ceb5.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Динамо
//                                                                                             —
//                                                                                             Пари
//                                                                                             НН
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 13:55</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                             <div
//                                                                 className="ivi-carousel-item"
//                                                                 style={{ width: '254.8px', paddingRight: '0px' }}>
//                                                                 <div
//                                                                     className="dropdownBroadcastPopular__item">
//                                                                     <a
//                                                                         className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
//                                                                         href="https://www.ivi.ru/broadcast/7906">
//                                                                         <div
//                                                                             className="nbl-posterSidewardBlock__bodyWrapper">
//                                                                             <div
//                                                                                 className="nbl-posterSidewardBlock__body">
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__imageSection">
//                                                                                     <div
//                                                                                         className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
//                                                                                         <div
//                                                                                             className="nbl-poster__imageWrapper">
//                                                                                             <img
//                                                                                                 className="nbl-poster__image"
//                                                                                                 data-stub="false"
//                                                                                                 src="https://thumbs.dfs.ivi.ru/storage29/contents/1/f/8f39e52d93a9f467596ebc4f551e90.jpg/116x76/?q=85" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     className="nbl-posterSidewardBlock__textSection">
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__titleRow">
//                                                                                         <div
//                                                                                             className="nbl-posterSidewardBlock__title">
//                                                                                             Сочи
//                                                                                             —
//                                                                                             Краснодар
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div
//                                                                                         className="nbl-posterSidewardBlock__extraRow">
//                                                                                                                         <span
//                                                                                                                             className="nbl-posterSidewardBlock__extraItem">Завтра 16:25</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraSeparator">•</span><span
//                                                                                         className="nbl-posterSidewardBlock__extraItem">Общее</span>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </a></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         className="ivi-carousel__shadow_right"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div
//                             className="dropdownTv__mainContentWidget dropdownTv__mainContentWidget">
//                             <div
//                                 className="nbl-subscriptionTeaser nbl-subscriptionTeaser_hasAnimation nbl-subscriptionTeaser_isShownElements">
//                                 <div className="nbl-subscriptionTeaser__posterBlock">
//                                     <div
//                                         className="nbl-subscriptionTeaser__posterBlockWrapper"
//                                         // style="--posters-count:10;"
//                                     >
//                                         <div
//                                             className="nbl-subscriptionTeaser__posterLane">
//                                             <a
//                                                 className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                                 href="/watch/odnazhdyi-v-rossii">
//                                                 <div
//                                                     className="nbl-poster__imageWrapper">
//                                                     <img className="nbl-poster__image"
//                                                          data-stub="false"
//                                                          src="https://thumbs.dfs.ivi.ru/storage33/contents/7/f/3f945a0f21ed0463cd3ec19ba7d3a2.jpg/256x144/?q=85" />
//                                                 </div>
//                                             </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/zhenskij-stand-up">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage9/contents/4/5/bd9f95d4542f33492ffe23146da9f5.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/comedy_club">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage5/contents/2/a/c2112668e261a83c8e0f09c45d2fee.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/comedy_woman">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage15/contents/e/f/c854b3cd29301d953a91ed3ab3b920.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/tantsyi">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage9/contents/1/2/453cd955b11a566fbdb2b871335e5a.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/darya">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage28/contents/b/6/7fc99f9e8d8a57cbbb311fda8ca8d0.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/vechernij-urgant">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage8/contents/8/8/94a52694a1e2913d3404c19b99be30.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/tachku-na-prokachku">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage4/contents/b/6/a42f53788bc8073c79d61fc9c920e7.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/comedy-battl-luchshee">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage4/contents/7/e/a17bf5edbe438675ea59f87861ee06.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/beremenna-v-16">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage3/contents/9/8/2a6b6aa99d674ab3cb2017997bfe6d.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/odnazhdyi-v-rossii">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage33/contents/7/f/3f945a0f21ed0463cd3ec19ba7d3a2.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/zhenskij-stand-up">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage9/contents/4/5/bd9f95d4542f33492ffe23146da9f5.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/comedy_club">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage5/contents/2/a/c2112668e261a83c8e0f09c45d2fee.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a></div>
//                                         <div
//                                             className="nbl-subscriptionTeaser__posterLane">
//                                             <a className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                                href="/watch/479997">
//                                                 <div
//                                                     className="nbl-poster__imageWrapper">
//                                                     <img className="nbl-poster__image"
//                                                          data-stub="false"
//                                                          src="https://thumbs.dfs.ivi.ru/storage28/contents/3/0/b7effe5c130f40d11b2e375beda559.jpg/256x144/?q=85" />
//                                                 </div>
//                                             </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/prozhektorperishilton">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage30/contents/0/8/a240b8d08bd10b46fa16df50e29d50.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/pozhaluj-tyi">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage30/contents/6/7/95725190380d91ab1ad526d941198f.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/odinochestvo-v-seti">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage26/contents/7/5/9e67e8897da5a1858701820ae17be5.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/zahoteli-pohudeli">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage3/contents/2/7/6a6c90d614f473e96ebd62b280f01f.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/mtv-plyazh-royal">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage3/contents/9/0/9955a85d20ab5460ad3c56edce6900.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/podstava-">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage2/contents/6/f/98669a90d4c2b3dee934b3c059c953.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/plyazh">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage4/contents/3/1/c27b8655c04e3f378b84a2adfa4352.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/svidanie-na-vyizhivanie">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage3/contents/d/9/d489813ba7f0b7ed22a1f513d88e71.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/molodyie-mamochki-2">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage30/contents/e/e/dbad81de8bfd1160af32b9b700ef58.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/479997">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage28/contents/3/0/b7effe5c130f40d11b2e375beda559.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/prozhektorperishilton">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage30/contents/0/8/a240b8d08bd10b46fa16df50e29d50.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/pozhaluj-tyi">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage30/contents/6/7/95725190380d91ab1ad526d941198f.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a></div>
//                                         <div
//                                             className="nbl-subscriptionTeaser__posterLane">
//                                             <a
//                                                 className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                                 href="/watch/molodyie-mamochki">
//                                                 <div
//                                                     className="nbl-poster__imageWrapper">
//                                                     <img className="nbl-poster__image"
//                                                          data-stub="false"
//                                                          src="https://thumbs.dfs.ivi.ru/storage6/contents/1/3/1ddb06c6b36e285a8f89f73a12c610.jpg/256x144/?q=85" />
//                                                 </div>
//                                             </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/zabej">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage33/contents/8/a/18694b67814f6aea1a88f688a77e05.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/barbershop">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage2/contents/c/7/d1f9e4f2ad4b5fc4eb3d1bf5cf707f.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/437690">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage23/contents/d/6/30926262603f59f1011c88e9899c1b.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/441023">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage38/contents/e/1/4ea19ffdf54e357d821e2f02c2a89d.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/438070">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage30/contents/6/d/09305458e7ddb0832514c2c6586e8d.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/snuki-i-dzhejvau-">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage8/contents/3/f/f10a39e5991f1107a699729532b999.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/441012">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage2/contents/c/e/c435aa6f50d7301ed4d6f345c37dc9.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/439917">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage2/contents/2/9/8c38852ff8290732bec24cc61c256c.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/438057">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage39/contents/c/5/7c13cd80784b2718592053eb7d1b0b.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/molodyie-mamochki">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage6/contents/1/3/1ddb06c6b36e285a8f89f73a12c610.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/zabej">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage33/contents/8/a/18694b67814f6aea1a88f688a77e05.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a><a
//                                             className="nbl-poster nbl-poster_type_horizontalPoster nbl-subscriptionTeaser__nbl-poster"
//                                             href="/watch/barbershop">
//                                             <div className="nbl-poster__imageWrapper">
//                                                 <img className="nbl-poster__image"
//                                                      data-stub="false"
//                                                      src="https://thumbs.dfs.ivi.ru/storage2/contents/c/7/d1f9e4f2ad4b5fc4eb3d1bf5cf707f.jpg/256x144/?q=85" />
//                                             </div>
//                                         </a></div>
//                                     </div>
//                                 </div>
//                                 <div className="nbl-subscriptionTeaser__leftFade"></div>
//                                 <div
//                                     className="nbl-subscriptionTeaser__rightFade"></div>
//                                 <div className="nbl-subscriptionTeaser__bottomPanel">
//                                     <div
//                                         className="nbl-subscriptionTeaser__bottomFade"></div>
//                                     <div
//                                         className="nbl-subscriptionTeaser__detailsBlock">
//                                         <div
//                                             className="nbl-subscriptionBadge nbl-subscriptionBadge_size_azom nbl-subscriptionBadge_brand_ivi nbl-subscriptionBadge_style_linus nbl-subscriptionTeaser__nbl-subscriptionBadge">
//                                             <div
//                                                 className="nbl-subscriptionBadge__logo"></div>
//                                         </div>
//                                         <div
//                                             className="nbl-subscriptionTeaser__detailsTextBlock">
//                                             <div
//                                                 className="nbl-subscriptionTeaser__detailsTitle">Подписка
//                                                 Иви
//                                             </div>
//                                             <div
//                                                 className="nbl-subscriptionTeaser__detailsExtra">От
//                                                 199&nbsp;₽ за месяц
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div
//                                         className="nbl-subscriptionTeaser__buttonWrapper">
//                                         <button
//                                             className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_cyrax nbl-button_hasBadge_0 nbl-subscriptionTeaser__nbl-button">
//                                             <div
//                                                 className="nbl-button__primaryText">Подключить
//                                             </div>
//                                         </button>
//                                     </div>
//                                     <div
//                                         className="nbl-subscriptionTeaser__note">Отключить
//                                         можно в любой момент
//                                     </div>
//                                 </div>
//                             </div>
//                             <a className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_withIcon nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
//                                href="https://www.ivi.ru/pages/tvsmart/">
//                                 <div className="nbl-button__primaryText">
//                                     <div
//                                         className="nbl-icon nbl-icon_smartTvPromo_16 nbl-button__nbl-icon"></div>
//                                     Смотреть на SmartTV
//                                 </div>
//                             </a></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


// <div className="headerDropdown profile">
//     <div className="headerDropdown__body">
//         <div className="headerDropdown__grid">
//             <div className="dropdownProfile">
//                 <div className="dropdownProfile__mainContent"><a
//                     className="dropdownProfile__tileItem"
//                     href="https://www.ivi.ru/profile/purchases">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_multiseries_20 nbl-paymentTile__nbl-icon"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">Покупки</div>
//                         </div>
//                     </div>
//                 </a><a className="dropdownProfile__tileItem"
//                        href="https://www.ivi.ru/profile/favorites">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_favoriteAdd_20 nbl-paymentTile__nbl-icon"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">Смотреть позже</div>
//                         </div>
//                     </div>
//                 </a><a className="dropdownProfile__tileItem"
//                        href="https://www.ivi.ru/profile/watched">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_history_20 nbl-paymentTile__nbl-icon"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">История просмотров
//                             </div>
//                         </div>
//                     </div>
//                 </a><a className="dropdownProfile__tileItem"
//                        href="https://www.ivi.ru/profile/subscriptions">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_quality_20 nbl-paymentTile__nbl-icon"></div>
//                         <div
//                             className="nbl-bulb nbl-bulb_style_dwafa nbl-bulb_size_mukos nbl-bulb_isShadowEnabled_1 nbl-paymentTile__nbl-bulb"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">Подписки</div>
//                             <div className="nbl-paymentTile__extra">Подключить</div>
//                         </div>
//                     </div>
//                 </a><a className="dropdownProfile__tileItem">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_certificate_20 nbl-paymentTile__nbl-icon"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">Активация
//                                 сертификата
//                             </div>
//                         </div>
//                     </div>
//                 </a><a className="dropdownProfile__tileItem">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_tvchannels_20 nbl-paymentTile__nbl-icon"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">Вход по коду</div>
//                         </div>
//                     </div>
//                 </a><a className="dropdownProfile__tileItem"
//                        href="https://www.ivi.ru/profile/cards">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_card_20 nbl-paymentTile__nbl-icon"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">Способы оплаты</div>
//                         </div>
//                     </div>
//                 </a><a className="dropdownProfile__tileItem"
//                        href="https://www.ivi.ru/profile/referral">
//                     <div
//                         className="nbl-paymentTile nbl-paymentTile_style_harmony nbl-paymentTile_type_petrari">
//                         <div
//                             className="nbl-icon nbl-icon_androidShare_20 nbl-paymentTile__nbl-icon"></div>
//                         <div className="nbl-paymentTile__textBlock">
//                             <div className="nbl-paymentTile__title">Пригласить друзей
//                             </div>
//                         </div>
//                     </div>
//                 </a></div>
//                 <div className="dropdownProfile__sideContent">
//                     <div className="dropdownProfile__sideContentInner">
//                         <div className="dropdownProfile__authSection">
//                             <button
//                                 className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_size_shinnok nbl-button_hasBadge_0">
//                                 <div className="nbl-button__primaryText">Войти или
//                                     зарегистрироваться
//                                 </div>
//                             </button>
//                             <div
//                                 className="dropdownProfile__dropdownLinksList dropdownLinksList">
//                                 <div className="dropdownLinksList__list">
//                                     <div className="dropdownLinksList__item"><a
//                                         className="nbl-link nbl-link_style_reska"
//                                         href="https://www.ivi.ru/profile/settings">Настройки</a>
//                                     </div>
//                                     <div className="dropdownLinksList__item"><a
//                                         className="nbl-link nbl-link_style_reska"
//                                         href="https://ask.ivi.ru/"
//                                         target="_blank">Помощь</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>