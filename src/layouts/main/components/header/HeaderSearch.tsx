import React from 'react'

const HeaderSearch: React.FC = () => {
    return (
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
    )
}

export default HeaderSearch