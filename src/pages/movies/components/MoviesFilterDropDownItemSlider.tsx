import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const MoviesFilterDropDownItemSlider = () => {
    return (
        <li className="filterDropdown__item filterDropdown__item_radio">
            <Slider />
        </li>
    )
}

export default MoviesFilterDropDownItemSlider