import React, {CSSProperties} from 'react'

interface MyCustomCSS extends CSSProperties {
    '--start-gradient-color': string
    '--end-gradient-color': string
    '--shadow-color': string
}

const Footer = () => {
    return (
        <footer className="iviFooter">
            <div className="iviFooter__container">
                <div className="iviFooter__container-inner">
                    <div className="iviFooter__content">
                        <div className="iviFooter__column iviFooter__column_narrow"><span className="iviFooter__title">О нас</span>
                            <ul className="iviFooter__linkList">
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="https://corp.ivi.ru/">О компании</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="https://corp.ivi.ru/career/#career-vacancy-block">Вакансии</a>
                                </li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/pages/beta">Программа
                                    бета-тестирования</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/info/partners">Информация
                                    для партнёров</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="https://corp.ivi.ru/advertisers/">Размещение
                                    рекламы</a>
                                </li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/info/agreement">Пользовательское
                                    соглашение</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/info/confidential">Политика
                                    конфиденциальности</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/info/goryachaya-liniya-komplaens">Комплаенс</a>
                                </li>
                            </ul>
                        </div>
                        <div className="iviFooter__column iviFooter__column_narrow"><span
                            className="iviFooter__title">Разделы</span>
                            <ul className="iviFooter__linkList">
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/">Мой Иви</a>
                                </li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/new">Что
                                    нового</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/movies">Фильмы</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/series">Сериалы</a></li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/animation">Мультфильмы</a>
                                </li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/tvplus">TV+</a>
                                </li>
                                <li className="iviFooter__linkItem"><a className="nbl-link nbl-link_style_reska"
                                                                       href="/goodmovies">Что
                                    посмотреть</a></li>
                            </ul>
                            <div className="iviFooter__certificateLinkWrapper"><a className="iviFooter__certificateLink"
                                                                                  href="/cert">Активация
                                сертификата</a></div>
                        </div>
                        <div className="iviFooter__column iviFooter__column_narrow"><span
                            className="iviFooter__title">Служба поддержки</span>
                            <div className="iviFooter__description"><span>Мы всегда готовы вам помочь.</span><span>Наши операторы онлайн 24/7</span>
                            </div>
                            <div className="iviFooter__support"><a
                                className="nbl-button nbl-button_textAlign_center nbl-button_style_makoto nbl-button_size_shinnok nbl-button_hasBadge_0 chatButton"
                                href="https://www.ivi.ru/profile"
                                target="_blank">
                                <div className="nbl-button__primaryText">Написать в чате</div>
                            </a>
                                <div className="iviFooter__supportButtons"><a
                                    className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_onlyIcon nbl-button_style_makoto nbl-button_size_shinnok nbl-button_hasBadge_0"
                                    href="mailto:support@ivi.ru">
                                    <div className="nbl-icon nbl-icon_email_16 nbl-button__nbl-icon"></div>
                                </a>
                                    <button
                                        className="nbl-button nbl-button_textAlign_center nbl-button_iconMode_onlyIcon nbl-button_style_makoto nbl-button_size_shinnok nbl-button_hasBadge_0"
                                        id="supportPhonesButton">
                                        <div className="nbl-icon nbl-icon_call_16 nbl-button__nbl-icon"></div>
                                    </button>
                                </div>
                                <div className="iviFooter__supportPhones " id="supportPhonesList"><a
                                    className="iviFooter__phoneItem"
                                    href="tel:+78612176920"
                                    rel="nofollow">
                                    <div className="iviFooter__phoneNumber">+7 861 217-69-20</div>
                                    <div className="iviFooter__description"></div>
                                </a></div>
                                <ul className="iviFooter__questions">
                                    <li><a className="nbl-link nbl-link_style_baf" href="https://ask.ivi.ru/"
                                           id="bottom_support_link"
                                           target="_blank">ask.ivi.ru</a>
                                        <div className="iviFooter__description">Ответы на вопросы</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="iviFooter__column iviFooter__column_narrow">
                            <div className="footerWidget">
                                <div className="footerWidget__iconSection"
                                     style={{'--start-gradient-color': '#A869F0', '--end-gradient-color': '#834CC2', '--shadow-color': '#A869F0'} as MyCustomCSS}>
                                    <div className="nbl-icon nbl-icon_noAds_56"
                                         style={{width: '56px', height: '56px', fontSize: '56px', lineHeight: '56px', color: '#ffffff'}}></div>
                                </div>
                                <div className="footerWidget__text">Смотрите фильмы, сериалы и мультфильмы без рекламы
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iviFooter__content">
                        <div className="iviFooter__column iviFooter__column_wide">
                            <div className="iviFooter__stores"><a
                                className="nbl-overturnButton nbl-overturnButton_style_aumiro nbl-overturnButton_size_wiz"
                                href="https://go.onelink.me/app/devicesiOS"><img
                                className="nbl-picture nbl-overturnButton__nbl-picture"
                                src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg" />
                                <div className="nbl-overturnButton__textBlock">
                                    <div className="nbl-overturnButton__preamble">Загрузить в</div>
                                    <div className="nbl-overturnButton__caption">App Store</div>
                                </div>
                            </a><a
                                className="nbl-overturnButton nbl-overturnButton_style_aumiro nbl-overturnButton_size_wiz"
                                href="https://go.onelink.me/app/devicesAndroid"><img
                                className="nbl-picture nbl-overturnButton__nbl-picture"
                                src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg" />
                                <div className="nbl-overturnButton__textBlock">
                                    <div className="nbl-overturnButton__preamble">Доступно в</div>
                                    <div className="nbl-overturnButton__caption">Google Play</div>
                                </div>
                            </a><a
                                className="nbl-overturnButton nbl-overturnButton_style_aumiro nbl-overturnButton_size_wiz"
                                href="/pages/tvsmart">
                                <div className="nbl-icon nbl-icon_smartTvPromo_20 nbl-overturnButton__nbl-icon"></div>
                                <div className="nbl-overturnButton__textBlock">
                                    <div className="nbl-overturnButton__preamble">Смотрите на</div>
                                    <div className="nbl-overturnButton__caption">Smart TV</div>
                                </div>
                            </a><a
                                className="nbl-button nbl-button_iconMode_withIcon nbl-button_style_makoto nbl-button_size_brant nbl-button_hasBadge_0 allDevices"
                                href="/devices">
                                <div className="nbl-button__primaryText">
                                    <div className="nbl-icon nbl-icon_anyDev_20 nbl-button__nbl-icon"></div>
                                    Все устройства
                                </div>
                            </a></div>
                            <div className="iviFooter__copyrights">
                                <div className="iviFooter__copyrightsSite">
                                    <span>©&nbsp;</span><span>2023</span><span>&nbsp;ООО «Иви.ру»</span>
                                </div>
                                <div className="iviFooter__copyrightsContent">HBO ® and related service marks are the
                                    property of
                                    Home Box Office, Inc
                                </div>
                            </div>
                        </div>
                        <div className="iviFooter__column iviFooter__column_wide">
                            <div className="iviFooter__community"><a className="iviFooter__communityLink"
                                                                     href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
                                                                     target="_blank">
                                <div className="nbl-knob nbl-knob nbl-knob_size_sandy nbl-knob_style_seshi"><img
                                    className="nbl-picture nbl-knob__nbl-picture"
                                    src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg" />
                                </div>
                            </a><a className="iviFooter__communityLink" href="https://ok.ru/ivi.ru" target="_blank">
                                <div className="nbl-knob nbl-knob nbl-knob_size_sandy nbl-knob_style_seshi"><img
                                    className="nbl-picture nbl-knob__nbl-picture"
                                    src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" />
                                </div>
                            </a><a className="iviFooter__communityLink" href="https://twitter.com/ivi_ru"
                                   target="_blank">
                                <div className="nbl-knob nbl-knob nbl-knob_size_sandy nbl-knob_style_seshi"><img
                                    className="nbl-picture nbl-knob__nbl-picture"
                                    src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg" />
                                </div>
                            </a><a className="iviFooter__communityLink" href="https://vb.me/a0544c" target="_blank">
                                <div className="nbl-knob nbl-knob nbl-knob_size_sandy nbl-knob_style_seshi"><img
                                    className="nbl-picture nbl-knob__nbl-picture"
                                    src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg" /></div>
                            </a><a className="iviFooter__communityLink" href="https://www.linkedin.com/company/2543415/"
                                   target="_blank">
                                <div className="nbl-knob nbl-knob nbl-knob_size_sandy nbl-knob_style_seshi"><img
                                    className="nbl-picture nbl-knob__nbl-picture"
                                    src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg" />
                                </div>
                            </a><a className="iviFooter__communityLink" href="https://t.me/official_iviru"
                                   target="_blank">
                                <div className="nbl-knob nbl-knob nbl-knob_size_sandy nbl-knob_style_seshi"><img
                                    className="nbl-picture nbl-knob__nbl-picture"
                                    src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg" />
                                </div>
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer