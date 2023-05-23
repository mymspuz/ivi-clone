import React, { useState } from 'react'

import ButtonLink from '../../../components/ButtonLink'

const MobileSupport = () => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ phone, setPhone ] = useState<boolean>(false)

    return (
        <div className="mobileNavigation-group">
            <div className={`mobileNavigation__item${isOpen ? ' mobileNavigation__item_expanded' : ''} support`}>
                <div
                    className={`nbl-arrowButton nbl-arrowButton_variation_zozon ${isOpen ? 'nbl-arrowButton_expanded' : 'nbl-arrowButton_collapsed'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="nbl-icon nbl-icon_message_20 nbl-icon_customExtraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_customExtraIcon"></div>
                    <div className="nbl-arrowButton__caption">Служба поддержки</div>
                    <div className="nbl-icon nbl-icon_arrowIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_arrowIcon"></div>
                </div>
                <div className="mobileNavigation__dropdown">
                    <div className="mobileNavigation__paragraph">
                        <span>Мы всегда готовы вам помочь.</span>
                        <span>Наши операторы онлайн 24/7</span>
                    </div>
                    <div className="mobileNavigation__support">
                        <div className="mobileNavigation__supportGrid">
                            <div className="mobileNavigation__supportGridItem">
                                <ButtonLink
                                    title={'Написать в чате'}
                                    link={'https://www.ivi.ru/profile'}
                                    addClass={'chatButton'}
                                />
                            </div>
                            <div className="mobileNavigation__supportGridItem">
                                <div className="mobileNavigation__supportButtons">
                                    <ButtonLink
                                        link={'mailto:support@ivi.ru'}
                                        icon={'nbl-icon_email_16'}
                                    />
                                    <ButtonLink
                                        handlerClick={() => setPhone(prevState => !prevState)}
                                        icon={'nbl-icon_call_16'}
                                    />
                                </div>
                                <div
                                    className={`mobileNavigation__supportPhones ${phone ? 'showed' : ''}`}
                                    id="supportPhonesList"
                                >
                                    <a
                                        className="mobileNavigation__phoneItem" href="tel:+78612176920"
                                        rel="nofollow"
                                    >
                                        <div className="mobileNavigation__phoneNumber">+7 861 217-69-20</div>
                                        <div className="mobileNavigation__description"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ul className="mobileNavigation__questions">
                            <li>
                                <a
                                    className="nbl-link nbl-link_style_baf"
                                    href="https://ask.ivi.ru/"
                                    id="bottom_support_link"
                                    target="_blank"
                                >
                                    ask.ivi.ru
                                </a>
                                <p className="mobileNavigation__description">Ответы на вопросы</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSupport