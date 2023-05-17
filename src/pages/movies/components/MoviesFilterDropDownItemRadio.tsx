import React, { useState } from 'react'

type TProps = {
    name: string
}

const MoviesFilterDropDownItemRadio: React.FC<TProps> = ({ name }) => {

    const [ active, setActive ] = useState<boolean>(false)

    return (
        <li className="filterDropdown__item filterDropdown__item_radio">
            <label className="filterDropdown__label">
                <input
                    className="filterDropdown__input"
                    type="radio"
                    name="years"
                    value={name}
                    checked={active}
                    onClick={() => setActive(!active)}
                />
                <div className="filterDropdown__input-text">{name}</div>
                <div className="filterDropdown__radio"></div>
            </label>
        </li>
    )
}

export default MoviesFilterDropDownItemRadio