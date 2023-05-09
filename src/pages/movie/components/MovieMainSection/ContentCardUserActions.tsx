import React from 'react'

import { ButtonLink } from '../../../../components'

const ContentCardUserActions = () => {

    const Btns = (): JSX.Element => {
        return (
            <div className="userButtons__hoard">
                <ButtonLink title={'Трейлер'} icon={'nbl-icon_playOutline_20'} addClass={'nbl-button_style_dafu userButtons__item_wide'} />
                <ButtonLink icon={'nbl-icon_favoriteAdd_20'} addClass={'nbl-button_style_dafu userButtons__item_wide'} />
                <ButtonLink icon={'nbl-icon_share_20'} addClass={'nbl-button_style_dafu userButtons__item_wide'} />
                <ButtonLink
                    title={'Бесплатные сериалы'}
                    icon={'nbl-icon_catalog_16'}
                    addClass={'nbl-button_style_dafu userButtons__item_wide userButtons__item_freeCollection'}
                />
            </div>
        )
    }

    return (
        <div className="contentCard__userActions">
            <div className="userButtons userButtons_wide contentCard__userButtons"><Btns /></div>
            <div className="userButtons userButtons_narrow contentCard__userButtons"><Btns /></div>
        </div>
    )
}

export default ContentCardUserActions