import React from 'react'

type TProps = {
    data: {
        link: string
        iconClass: string
        primaryText: string | null
        secondaryText: string
    }
}

const ButtonStore: React.FC<TProps> = ({ data }) => {

    const { link, iconClass, primaryText, secondaryText } = data

    return (
        <a
            className="storeButton storeButton_view_dark"
            href={link}
        >
            <span className={iconClass}></span>
            <div className="storeButton__buttonText">
                {primaryText && <span className="storeButton__buttonPrimaryText">{primaryText}</span>}
                <span className="storeButton__buttonSecondaryText">{secondaryText}</span>
            </div>
        </a>
    )
}

export default ButtonStore