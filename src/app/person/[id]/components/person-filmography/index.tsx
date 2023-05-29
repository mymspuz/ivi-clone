import React, { useContext } from 'react'

import PersonFilmographyItem from './PersonFilmographyItem'
import { PersonContext } from '../../page'

const PersonFilmography: React.FC = () => {

    const { movies } = useContext(PersonContext)

    return (
        <div id="filmography" className="personFilmography person__personFilmography">
            <div className="personFilmography__header">
                <div className="personFilmography__title">Полная фильмография</div>
                <div className="personFilmography__extraTitle">{movies.length} фильма</div>
            </div>
            <div className="personFilmography__content">
                <div className="personFilmography__tabs">
                    <div className="nbl-scrollableTabs nbl-scrollableTabs nbl-scrollableTabs_variation_vex personFilmography__scrollableTabsSection">
                        <div className="nbl-scrollpane nbl-scrollpane nbl-scrollpane_variation_crein nbl-scrollpane_hasNativeScroll nbl-scrollableTabs__nbl-scrollpane">
                            <div className="nbl-scrollpane__viewport">
                                <div className="nbl-scrollpane__content">
                                    <div className="nbl-tabs nbl-tabs_style_fir nbl-scrollableTabs__nbl-tabs">
                                        <div className="nbl-tabs__inner">
                                            <div className="nbl-tabs__gutter"></div>
                                            <div className="nbl-tabsItem nbl-tabsItem_selected nbl-tabs__nbl-tabsItem">
                                                <div className="nbl-tabsItem__textBlock">
                                                    <div className="nbl-tabsItem__captionRow">
                                                        <div className="nbl-tabsItem__caption">Всё</div>
                                                    </div>
                                                </div>
                                                <div className="nbl-tabsItem__stripe" style={{ width: '27px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personFilmography__list">
                    {movies && movies.map(movie => <PersonFilmographyItem key={movie.id} item={movie} type={'person'} /> )}
                </div>
                {/*<div className="personFilmography__more">*/}
                {/*    <button className="personFilmography__moreLink">Ещё 35 фильмов</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default PersonFilmography