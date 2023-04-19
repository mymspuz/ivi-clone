import React from 'react'

import { ButtonCommunityLink } from '../../../../components'

const FooterCommunity: React.FC = () => {

    const btnsCommunity: { link: string, icon: string }[] = [
        { link: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg' },
        { link: 'https://ok.ru/ivi.ru', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg' },
        { link: 'https://twitter.com/ivi_ru', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg' },
        { link: 'https://vb.me/a0544c', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg' },
        { link: 'https://www.linkedin.com/company/2543415/', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg' },
        { link: 'https://t.me/official_iviru', icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg' },
    ]

    return (
        <div className="iviFooter__column iviFooter__column_wide">
            <div className="iviFooter__community">
                {btnsCommunity.map(btn =>
                    <ButtonCommunityLink
                        key={btn.link}
                        link={btn.link}
                        icon={btn.icon}
                    />
                )}
            </div>
        </div>
    )
}

export default FooterCommunity