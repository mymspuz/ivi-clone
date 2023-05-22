import React, { useState } from 'react'

const MoviesSorting = () => {

    const data: { id: number, name: string }[] = [
        { id: 1, name: 'По количеству оценок' },
        { id: 2, name: 'По рейтингу' },
        { id: 3, name: 'По дате выхода' },
        { id: 4, name: 'По алфавиту' },
    ]

    const [ active, setActive ] = useState<boolean>(false)
    const [ filterName, setFilterName ] = useState<{ id: number, name: string }>(data[0])

    const handlerSortingItem = (item: { id: number, name: string }): void => {
        setFilterName(item)
        setActive(false)
    }

    return (
        <section className="pageSection catalogControlPanel__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="catalogControlPanel">
                        <div className={`sorting ${active ? 'sorting_active' : ''}`}>
                            <div className={`nbl-arrowButton nbl-arrowButton_variation_tisael nbl-arrowButton_${active ? 'expanded' : 'collapsed'}`}>
                                <div className="nbl-icon nbl-icon_extraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_extraIcon"></div>
                                <div className="nbl-arrowButton__caption">{filterName.name}</div>
                                <div
                                    className="nbl-icon nbl-icon_arrowIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_arrowIcon"
                                    onClick={() => setActive(!active)}
                                ></div>
                            </div>
                            <div className="nbl-dropdown nbl-dropdown_hasIcon_0 nbl-dropdown_hasStripe_1 sorting__nbl-dropdown">
                                <div className="nbl-dropdown__title">Сортировать</div>
                                {data.map(item => (
                                    <div
                                        key={item.id}
                                        className={`nbl-dropdown__item ${item === filterName ? 'nbl-dropdown__item_selected' : ''}`}
                                        onClick={() => handlerSortingItem(item)}
                                    >
                                        {item.id === filterName.id && <div className="nbl-dropdown__itemStripe"></div>}
                                        <div className="nbl-dropdown__itemText">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesSorting