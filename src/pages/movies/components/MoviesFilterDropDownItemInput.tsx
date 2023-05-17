import React from 'react'

type TProps = {
    name: string
}

const MoviesFilterDropDownItemInput: React.FC<TProps> = ({ name }) => {
    return (
        <li className="filterDropdown__item filterDropdown__item_checkbox">
            <label className="filterDropdown__label">
                <input
                    className="filterDropdown__input"
                    name="years"
                    type="checkbox"
                    value={name}
                />
                <div className="filterDropdown__input-text">{name}</div>
                <div className="filterDropdown__checkbox">
                    <div
                        className="nbl-icon nbl-icon_selected_16 filterDropdown__nbl-icon"
                        style={{ width: '16px', height: '16px', fontSize: '16px', lineHeight: '16px' }}
                    ></div>
                </div>
            </label>
        </li>
    )
}

export default MoviesFilterDropDownItemInput