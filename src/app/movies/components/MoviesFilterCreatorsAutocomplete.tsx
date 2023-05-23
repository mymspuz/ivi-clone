import React from 'react'

const MoviesFilterCreatorsAutocomplete = () => {
    return (
        <>
            <select name="creators">
                <option value="actors">Актеры</option>
                <option value="producers">Режиссеры</option>
            </select>
            <input type={'text'} />
        </>
    )
}

export default MoviesFilterCreatorsAutocomplete