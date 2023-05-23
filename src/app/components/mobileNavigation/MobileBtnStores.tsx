import React from 'react'

import { ButtonStore } from '../../../components'

const MobileBtnStores = () => {

    const data: { link: string, iconClass: string, primaryText: string | null, secondaryText: string }[] = [
        // { link: 'https://go.onelink.me/app/devicesAndroid', iconClass: 'storeButton__googlePlayIcon', primaryText: 'Доступно в', secondaryText: 'Google Play' },
        { link: 'https://www.ivi.ru/pages/tvsmart', iconClass: 'storeButton__smartTvIcon', primaryText: 'Смотрите на', secondaryText: 'Smart TV' },
        { link: 'https://www.ivi.ru/devices', iconClass: 'storeButton__allDevicesIcon', primaryText: null, secondaryText: 'Все устройства' },
    ]

    return (
        <div className="mobileNavigation__stores">
            {data.map(btn => (
                <div key={btn.link} className="mobileNavigation__storesItem">
                    <ButtonStore data={btn} />
                </div>
            ))}
        </div>
    )
}

export default MobileBtnStores