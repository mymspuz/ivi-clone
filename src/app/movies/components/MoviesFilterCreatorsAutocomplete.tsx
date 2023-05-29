import React from 'react'

import { IFilterType } from '@/models/Movies'

type TProps = {
    type: IFilterType
    handleSearchActor: (params: { role: string, name: string }) => void
}

const MoviesFilterCreatorsAutocomplete: React.FC<TProps> = ({ type, handleSearchActor }) => {

    let role = ''
    if (type === 'actors') role = 'actor'
    if (type === 'directors') role = 'director'

    return (
        <input
            type={'text'}
            className={'my-input'}
            onChange={(e) => handleSearchActor({ role, name: e.target.value })}
        />
    )
}

export default MoviesFilterCreatorsAutocomplete