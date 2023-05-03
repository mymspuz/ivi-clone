import React from 'react'

const MobileEnterToCode: React.FC = () => {
    return (
        <ul className="mobileNavigation__linkSection">
            <li className="mobileNavigation__linkSectionItem">
                <a
                    className="nbl-arrowButton nbl-arrowButton_variation_zozon nbl-arrowButton_expanded"
                    href="https://www.ivi.ru/code"
                >
                    <div className="nbl-icon nbl-icon_tvchannels_20 nbl-icon_customExtraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_customExtraIcon"></div>
                    <div className="nbl-arrowButton__caption">Вход по коду</div>
                </a>
            </li>
        </ul>
    )
}

export default MobileEnterToCode