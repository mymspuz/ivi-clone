import React from 'react'

import MoviesFilterDropDownItemInput from './MoviesFilterDropDownItemInput'
import MoviesFilterDropDownItemRadio from './MoviesFilterDropDownItemRadio'
import MoviesFilterDropDownItemSlider from './MoviesFilterDropDownItemSlider'
import { IFilterType } from '@/models/Movies'

type TProps = {
    type: IFilterType
    data: { id: number, name: string }[]
}

const MoviesFilterDropDown: React.FC<TProps> = ({ type, data }) => {

    return (
        <div className="filterDropdown__list-container">
            <ul className="filterDropdown__list hasSeparator">
                {['genres', 'countries', 'actors', 'directors'].includes(type) && data.map(item => <MoviesFilterDropDownItemInput key={item.id} name={item.name} type={type} />)}
                {['years'].includes(type) && data.map(item => <MoviesFilterDropDownItemRadio key={item.id} name={item.name} />)}
                {['ratings', 'votes'].includes(type) && <MoviesFilterDropDownItemSlider type={type} />}
            </ul>
        </div>
    )
}

export default MoviesFilterDropDown