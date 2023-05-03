import React from 'react'

import {
    MobileBtnStores,
    MobileCopyright,
    MobileEnterToCode,
    MobileHeaderItems,
    MobileMovies,
    MobileRatings,
    MobileSubscription,
    MobileSupport,
    MobileTVPlus,
    NavigationItem
} from './index'
import {
    animationMenuItemsDoubleColumn,
    animationMenuItemsSideContent,
    animationMenuItemsSingleColumn,

    moviesMenuItemsDoubleColumn,
    moviesMenuItemsSideContent,
    moviesMenuItemsSingleColumn,

    seriesMenuItemsDoubleColumn,
    seriesMenuItemsSideContent,
    seriesMenuItemsSingleColumn,

    tvplusMenuItems,
    btnsCommunity,
    footerMenuAbout
} from '../../../../data/dataMenus'
import { ButtonCommunityLink } from '../../../../components'

const MobileNavigation = () => {
    return (
        <div className="drawer drawer_isOpen isAbTest">
            <div className="drawer__inner isAbTest">
                <div className="mobileNavigation isAbTest">
                    <div className="mobileNavigation__lists__container">
                        <MobileSubscription />
                        <div className="mobileNavigation-group">
                            <MobileHeaderItems />
                            <MobileMovies
                                title={{ main: 'Фильмы', all: 'Все фильмы' }}
                                firstColumnData={moviesMenuItemsDoubleColumn}
                                secondColumnData={moviesMenuItemsSingleColumn}
                                widgetData={moviesMenuItemsSideContent}
                            />
                            <MobileMovies
                                title={{ main: 'Сериалы', all: 'Все сериалы' }}
                                firstColumnData={seriesMenuItemsDoubleColumn}
                                secondColumnData={seriesMenuItemsSingleColumn}
                                widgetData={seriesMenuItemsSideContent}
                            />
                            <MobileMovies
                                title={{ main: 'Мультфильмы', all: 'Все мультфильмы' }}
                                firstColumnData={animationMenuItemsDoubleColumn}
                                secondColumnData={animationMenuItemsSingleColumn}
                                widgetData={animationMenuItemsSideContent}
                            />
                            <MobileTVPlus title={'TV+'} items={tvplusMenuItems} />
                            <div className="mobileNavigation__item">
                                <a
                                    className="nbl-arrowButton nbl-arrowButton_variation_zozon nbl-arrowButton_expanded"
                                    href="https://www.ivi.ru/goodmovies"
                                >
                                    <div className="nbl-arrowButton__caption">Что посмотреть</div>
                                </a>
                            </div>
                        </div>
                        <MobileRatings />
                        <div className="mobileNavigation-group">
                            <NavigationItem data={footerMenuAbout} />
                            <div className="mobileNavigation__item">
                                <MobileEnterToCode />
                                <MobileBtnStores />
                            </div>
                        </div>
                        <MobileSupport />
                    </div>
                    <div className="mobileNavigation__footer">
                        <div className="mobileNavigation__community">
                            {btnsCommunity.map(btn =>
                                <ButtonCommunityLink
                                    key={btn.link}
                                    link={btn.link}
                                    icon={btn.icon}
                                />
                            )}
                        </div>
                        <MobileCopyright />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigation