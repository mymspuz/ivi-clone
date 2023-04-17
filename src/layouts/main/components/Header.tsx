import React, { useState } from 'react'

import { HeaderLogo, HeaderMenu } from './index'
import { mainMenuItems } from '../../../data/dataMenus'
import HeaderDropDownMenu from "./HeaderDropDownMenu";

    // <!--            <div id="headerTop" class="headerTop headerTop_withoutBorder headerTop_state_init headerTop_hasDropdownMenu">-->
    // <!--            headerTop_movies_menu_item-->
    // <!--            headerTop_series_menu_item-->
    // <!--            headerTop_animation_menu_item-->
    // <!--            headerTop_tvplus_menu_item-->
    // <!--            headerTop_notify-->
    // <!--            headerTop_profile-->

const Header: React.FC = () => {

    const headerTopClassNameDefault: string = 'headerTop headerTop_withoutBorder headerTop_state_init headerTop_hasDropdownMenu'
    const [headerTopClassName, setHeaderTopClassName] = useState<string | null>(headerTopClassNameDefault)
    const menuItemHover = (id: string | null) => {
        setHeaderTopClassName(id)
    }

    return (
        <header className="headerTop__innerWrapper">
            <div id="headerTop" className={headerTopClassNameDefault + headerTopClassName ? ` headerTop_isHovered ${headerTopClassName}` : ''}>
                <div className="headerTop__grid">
                    <div className="headerTop__grid-inner">
                        <div className="headerTop__body">
                            <div className="headerTop__content">
                                <HeaderLogo />
                                <HeaderMenu items={mainMenuItems} handlerHover={menuItemHover} />
                                <div className="headerTop__wideArea">
                                    <div
                                        className="headerTop__additionalButton headerTop__additionalButton_isAbTest headerTop__additionalButton_hasGradient"
                                        data-test="header_subscription_button"
                                    >
                                        <div
                                            className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_hasBadge_0">
                                            <div className="nbl-button__primaryText">Оплатить подписку</div>
                                        </div>
                                    </div>
                                    <div className="headerTop__headerSearch">
                                        <button
                                            data-test="header_search"
                                            className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_sairo nbl-button_size_stryker nbl-button_hasBadge_0"
                                        >
                                            <div className="nbl-button__primaryText">
                                                <div className="nbl-icon nbl-icon_search_16 nbl-button__nbl-icon"></div>
                                                Поиск
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div data-test="header_pull_notifications"
                                     className="headerTop__headerNotify headerNotify">
                                    <a className="headerNotify__link"
                                       href="https://www.ivi.ru/profile/pull_notifications">
                                        <div
                                            className="nbl-simpleControlButton nbl-simpleControlButton_size_quill nbl-simpleControlButton_style_mali">
                                            <div className="nbl-simpleControlButton__content">
                                                <div
                                                    className="nbl-icon nbl-icon_pull_16 nbl-simpleControlButton__nbl-icon"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div data-test="header_avatar" className="headerTop__headerAvatar headerAvatar">
                                    <a
                                        className="headerAvatar__link" href="https://www.ivi.ru/profile"
                                        title="Войти в профиль"
                                    >
                                        <div
                                            className="nbl-button nbl-button_iconMode_onlyIcon nbl-button_style_unu nbl-button_size_blaze nbl-button_hasBadge_0">
                                            <div className="nbl-icon nbl-icon_avatar_20 nbl-button__nbl-icon"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="headerDropdownBody" id="headerDropdownBody">
                                {headerTopClassName && <HeaderDropDownMenu id={headerTopClassName} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header