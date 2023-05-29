import React, { useState } from 'react'
import Link from 'next/link'

import { IMovie } from '@/models/Movie'
import { MOVIE_URL } from '@/constants/urls'
import { ButtonLink } from '../../../../../components'

type TProps = {
    item: IMovie
    type: 'admin' | 'person'
    handleRemove?: (id: number) => void
    handleEdit?: (data: IMovie) => void
}

const PersonFilmographyItem: React.FC<TProps> = ({ item, type, handleRemove, handleEdit }) => {

    const [ edit, setEdit ] = useState<boolean>(false)
    const [ editData, setEditData ] = useState<{ id: number, rus: string, eng: string }>({
        id: item.id,
        rus: item.name,
        eng: item.engName
    })

    const handleClickChange = () => {
        if (edit && handleEdit) handleEdit({...item, name: editData.rus, engName: editData.eng})
        setEdit(!edit)
    }

    return (
        <div data-contentid={item.id} className="personFilmographyItem personFilmography__personFilmographyItem">
            <div className="personFilmographyItem__body">
                <div className="personFilmographyItem__figure">
                    <div className="nbl-poster nbl-poster_type_poster">
                        <div className="nbl-poster__imageWrapper">
                            <img
                                className="nbl-poster__image"
                                data-stub="false"
                                src={item.poster}
                            />
                        </div>
                    </div>
                </div>
                <div className="personFilmographyItem__main">
                    <div className="personFilmographyItem__info">
                        <div className="personFilmographyItem__year">
                            <span>{item.yearRelease.start}</span>
                        </div>
                        <div
                            className="personFilmographyItem__title"
                            title={item.name}
                        >
                            {item.name}
                        </div>
                        <div className="personFilmographyItem__rating">
                            <span className="personFilmographyItem__ratingLabel">Рейтинг Иви:</span>
                            <span className="personFilmographyItem__ratingValue">
                                <span className="personFilmographyItem__ratingvalueInteger">{item.rating.valueInt}</span>
                                <span className="personFilmographyItem__ratingvalueFraction">,{item.rating.valueFract}</span>
                            </span>
                        </div>
                    </div>
                    <div className="personFilmographyItem__action">
                        {type === 'person' && <ButtonLink title={'Подробнее'} handlerClick={() => <Link href={`${MOVIE_URL}${item.id}`} />} />}
                        {type === 'admin' &&
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <ButtonLink title={'Удалить'} handlerClick={() => handleRemove ? handleRemove(item.id) : (item.id)} />
                                <ButtonLink
                                    title={edit ? 'Сохранить' : 'Изменить'}
                                    handlerClick={handleClickChange}
                                    disabled={(!editData.rus || !editData.eng) || (edit && editData.rus === item.name && editData.eng === item.engName)}
                                />
                            </div>
                        }
                    </div>
                    {edit &&
                        <div style={{ textAlign: 'end', display: 'flex', flexDirection: 'column', alignItems: 'end', gap: '20px' }}>
                            <input
                                type={'text'}
                                value={editData.rus}
                                onChange={(e) => setEditData({...editData, rus: e.target.value})}
                                className={'my-input'}
                            />
                            <input
                                type={'text'}
                                value={editData.eng}
                                onChange={(e) => setEditData({...editData, eng: e.target.value})}
                                className={'my-input'}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PersonFilmographyItem