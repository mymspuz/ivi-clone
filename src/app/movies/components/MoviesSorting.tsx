import React, { useState } from 'react'

import { dataSorting } from '@/data/dataMovie'
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import { TSorting } from '@/models/Movie'
import { setSortingParams } from '@/store/slice/moviesSlice'

const MoviesSorting = () => {

    const stateSort = useAppSelector(state => state.movies.sorting)
    const dispatch = useAppDispatch()

    const [ active, setActive ] = useState<boolean>(false)
    const [ sorting, setSorting ] = useState<{ id: number, name: string, type: TSorting }>(stateSort)

    const handlerSortingItem = (item: { id: number, name: string, type: TSorting }): void => {
        setSorting(item)
        setActive(false)
        dispatch(setSortingParams(item))
    }

    return (
        <section className="pageSection catalogControlPanel__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="catalogControlPanel">
                        <div className={`sorting ${active ? 'sorting_active' : ''}`}>
                            <div className={`nbl-arrowButton nbl-arrowButton_variation_tisael nbl-arrowButton_${active ? 'expanded' : 'collapsed'}`}>
                                <div className="nbl-icon nbl-icon_extraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_extraIcon"></div>
                                <div className="nbl-arrowButton__caption">{sorting.name}</div>
                                <div
                                    className="nbl-icon nbl-icon_arrowIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_arrowIcon"
                                    onClick={() => setActive(!active)}
                                ></div>
                            </div>
                            <div className="nbl-dropdown nbl-dropdown_hasIcon_0 nbl-dropdown_hasStripe_1 sorting__nbl-dropdown">
                                <div className="nbl-dropdown__title">Сортировать</div>
                                {dataSorting.map(item => (
                                    <div
                                        key={item.id}
                                        className={`nbl-dropdown__item ${item.id === sorting.id ? 'nbl-dropdown__item_selected' : ''}`}
                                        onClick={() => handlerSortingItem(item)}
                                    >
                                        {item.id === sorting.id && <div className="nbl-dropdown__itemStripe"></div>}
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