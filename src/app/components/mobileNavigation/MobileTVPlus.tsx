import React, { useState } from 'react'

import { IUIMenu } from '@/models/uiMenu'
import { MobileBroadcastPopular, MobileTVPopular } from './index'
import { tvplusBroadcast, tvplusSlider } from '@/data/dataMenus'

type TProps = {
    title: string
    items: { title: string, items: IUIMenu[] }
}

const MobileTvPlus: React.FC<TProps> = ({ title, items }) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    return (
        <div className={`mobileNavigation__item${isOpen ? ' mobileNavigation__item_expanded' : ''} tvPlus`}>
            <div
                className={`nbl-arrowButton nbl-arrowButton_variation_zozon ${isOpen ? 'nbl-arrowButton_expanded' : 'nbl-arrowButton_collapsed'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="nbl-icon nbl-icon_tvPlus_20 nbl-icon_customExtraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_customExtraIcon"></div>
                <div className="nbl-arrowButton__caption">{title}</div>
                <div className="nbl-icon nbl-icon_arrowIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_arrowIcon"></div>
            </div>
            <div className="mobileNavigation__dropdown">
                <div className="dropdownLinksList">
                    <div className="dropdownLinksList__title">{items.title}</div>
                    <div className="dropdownLinksList__list">
                        {items.items.map(item => (
                            <div key={item.id} className="dropdownLinksList__item">
                                <a
                                    className="nbl-link nbl-link_style_wovou"
                                    href={item.link}
                                    title={item.title}
                                >
                                    {item.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <a
                    className="nbl-button nbl-button_textAlign_center nbl-button_style_iekichi nbl-button_size_shinnok nbl-button_hasBadge_0"
                    href="https://www.ivi.ru/tvplus/tv-schedule-today"
                >
                    <div className="nbl-button__primaryText">
                        Телепрограмма
                    </div>
                </a>
                <MobileTVPopular data={tvplusSlider} />
                <MobileBroadcastPopular data={tvplusBroadcast} />
            </div>
        </div>
    )
}

export default MobileTvPlus