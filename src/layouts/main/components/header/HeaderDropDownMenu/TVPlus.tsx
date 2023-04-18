import React from 'react'

import {
    tvplusBroadcast,
    tvplusMenuItems,
    tvplusMenuItemsWidgetContent,
    tvplusSlider
} from '../../../../../data/dataMenus'
import SideContentWidget from './SideContentWidget'

const TvPlus: React.FC = () => {
    const tvplusMenu = tvplusMenuItems
    const tvplusPopular = tvplusSlider
    const broadcast = tvplusBroadcast

    return (
        <div className="headerDropdown tvplus_menu_item">
            <div className="headerDropdown__body">
                <div className="headerDropdown__grid">
                    <div className="dropdownTv">
                        <div className="dropdownTv__sideContent">
                            <div className="dropdownLinksList">
                                <div className="dropdownLinksList__title">{tvplusMenu.title}</div>
                                <div className="dropdownLinksList__list">
                                    {tvplusMenu.items.map(item => (
                                        <div key={item.id} className="dropdownLinksList__item">
                                            <a
                                                className="nbl-link nbl-link_style_reska"
                                                href={item.link}
                                                title={item.title}
                                            >
                                                {item.title}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a className="nbl-button nbl-button_textAlign_center nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
                               href="https://www.ivi.ru/tvplus/tv-schedule-today"
                            >
                                <div className="nbl-button__primaryText">Телепрограмма</div>
                            </a>
                        </div>
                        <div className="dropdownTv__mainContent">
                            <div className="dropdownTv__mainContentInner">
                                <div className="dropdownTv__mainContentPopulars">
                                    {tvplusPopular.map(popular => (
                                        <div key={popular.title} className="dropdownTvPopular">
                                            <div className="dropdownTvPopular__title">{popular.title}</div>
                                            <div className="gallery gallery gallery_ivi-carousel">
                                                <div className="gallery__carousel">
                                                    <div className="gallery__viewport">
                                                        <div className="gallery__viewport-inner">
                                                            <div className="ivi-carousel">
                                                                <div className="ivi-carousel-viewport">
                                                                    <div className="ivi-carousel-container">
                                                                        {popular.data.map(item => (
                                                                            <div
                                                                                key={item.link}
                                                                                className="ivi-carousel-item"
                                                                                style={{ width: '88.1538px', paddingRight: '16px' }}
                                                                            >
                                                                                <div className="dropdownTvPopular__item">
                                                                                    <a
                                                                                        className="nbl-poster nbl-poster_type_broadcastThumb"
                                                                                        href={item.link}
                                                                                    >
                                                                                        <div className="nbl-poster__imageWrapper">
                                                                                            <img
                                                                                                className="nbl-poster__image"
                                                                                                data-stub="false"
                                                                                                src={item.poster}
                                                                                                alt={'poster'}
                                                                                            />
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className="ivi-carousel__shadow_right"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="dropdownBroadcastPopular">
                                        <div className="dropdownBroadcastPopular__title">{broadcast.title}</div>
                                            <div className="gallery gallery gallery_ivi-carousel">
                                                <div className="gallery__carousel">
                                                    <div className="gallery__viewport">
                                                        <div className="gallery__viewport-inner">
                                                            <div className="ivi-carousel">
                                                                <div className="ivi-carousel-viewport">
                                                                    <div className="ivi-carousel-container">
                                                                        {broadcast.data.map(item => (
                                                                            <div
                                                                                key={item.link}
                                                                                className="ivi-carousel-item"
                                                                                style={{ width: '254.8px', paddingRight: '16px' }}
                                                                            >
                                                                                <div className="dropdownBroadcastPopular__item">
                                                                                    <a
                                                                                        className="nbl-posterSidewardBlock nbl-posterSidewardBlock_type_broadcastThumb nbl-posterSidewardBlock_size_kebles nbl-posterSidewardBlock_style_kotenic"
                                                                                        href={item.link}
                                                                                    >
                                                                                        <div className="nbl-posterSidewardBlock__bodyWrapper">
                                                                                            <div className="nbl-posterSidewardBlock__body">
                                                                                                <div className="nbl-posterSidewardBlock__imageSection">
                                                                                                    <div className="nbl-poster nbl-poster_type_broadcastThumb nbl-poster_extrasMode_lu nbl-posterSidewardBlock__nbl-poster">
                                                                                                        <div className="nbl-poster__imageWrapper">
                                                                                                            <img
                                                                                                                className="nbl-poster__image"
                                                                                                                data-stub="false"
                                                                                                                src={item.poster}
                                                                                                                alt={'broadcast'}
                                                                                                            />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="nbl-posterSidewardBlock__textSection">
                                                                                                    <div className="nbl-posterSidewardBlock__titleRow">
                                                                                                        <div className="nbl-posterSidewardBlock__title">
                                                                                                            {item.titleBroadcast}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="nbl-posterSidewardBlock__extraRow">
                                                                                                        <span className="nbl-posterSidewardBlock__extraItem">{item.timeBroadcast}</span>
                                                                                                        <span className="nbl-posterSidewardBlock__extraSeparator">•</span>
                                                                                                        <span className="nbl-posterSidewardBlock__extraItem">{item.typeBroadcast}</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className="ivi-carousel__shadow_right"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <SideContentWidget data={tvplusMenuItemsWidgetContent} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TvPlus