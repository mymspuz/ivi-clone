import React from 'react'

type TProps = {
    icon: string
    name: string
}

const MoviesFilterCountryItem: React.FC<TProps> = ({ icon, name }) => {
    return (
        <div className="sausage sausage_type_light filterDropdown__sausage">
            <div className="sausage__title">{name}</div>
        </div>
    )
}

export default MoviesFilterCountryItem