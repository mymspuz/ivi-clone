import React, { useEffect, useState } from 'react'

import { useCreateGenreMutation, useGetAllQuery, useUpdateGenreMutation } from '@/store/queries/genres.queri'
import { ButtonLink } from '@/components'

const GenresSection = () => {

    const [ genres, setGenres ] = useState<{ id: number, name: string }[]>([])
    const [ selectedGenre, setSelectedGenre ] = useState<{ id: number, name: string }>({ id: 0, name: '' })
    const [ editGenre, setEditGenre ] = useState<string>('')
    const [ newGenre, setNewGenre ] = useState<string>('')
    const [ successEdit, setSuccessEdit ] = useState<boolean>(false)
    const [ successNew, setSuccessNew ] = useState<boolean>(false)

    const [ updateGenre ] = useUpdateGenreMutation()
    const [ createGenre ] = useCreateGenreMutation()

    const { data, isLoading, isError, error, isSuccess } = useGetAllQuery()

    const handleChangeSelect = (event:  React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre({
            id: Number(event.target.value),
            name: event.target.selectedOptions[0].label as string
        })
    }

    const handleBtnEditGenre = () => {
        setSuccessEdit(false)
        updateGenre({ id: selectedGenre.id, name: editGenre.toLowerCase().trim() })
            .unwrap()
            .then(fulfilled => {
                const copyGenres = [...genres]
                setGenres(copyGenres.map(g => {
                    const temp = {...g}
                    if (temp.id === selectedGenre.id) {
                        temp.name = editGenre
                    }
                    return temp
                }))
            })
            .catch(rejected => console.error(rejected))
    }

    const handleBtnNewGenre = () => {
        setSuccessNew(false)
        createGenre({ name: newGenre.toLowerCase().trim() })
            .unwrap()
            .then(fulfilled => {
                const copyGenres = [...genres, { id: fulfilled.genre_id, name: fulfilled.name }]
                setGenres(copyGenres)
                setNewGenre('')
            })
            .catch(rejected => console.error(rejected))
    }

    const checkInputValue = (value: string): boolean => Boolean(value) && !data?.some(item => item.name === value.toLowerCase().trim())

    useEffect(() => {
        if (!isLoading && data) setGenres(data)
    }, [isLoading])

    useEffect(() => {
        setEditGenre(selectedGenre.id ? selectedGenre.name : '')
    }, [selectedGenre])

    useEffect(() => {
        if (data) setSuccessEdit(checkInputValue(editGenre))
    }, [editGenre])

    useEffect(() => {
        if (data) setSuccessNew(checkInputValue(newGenre))
    }, [newGenre])

    return (
        <section className="pageSection pageSection_noGap person__pageSection person__pageSection_noGap">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="person__contentColumn">
                        <div className="person__personHeader personHeader personHeader_hasPosterImage">
                            <div className="personFilmography__header">
                                <div className="personFilmography__title" style={{ marginBottom: '20px' }}>Жанры</div>
                            </div>
                            {/*<h1 className="personHeader__title" style={{ marginBottom: '20px' }}>Жанры</h1>*/}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                {(!isLoading && data) &&
                                    <>
                                        <div style={{
                                            flexBasis: '50%',
                                            padding: '0px 10px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            gap: '15px'
                                        }}>
                                            <select
                                                name="genres"
                                                onChange={handleChangeSelect}
                                                style={{ width: '100%' }}
                                                className={'my-input'}
                                            >
                                                <option value="0">Выберите жанр для редактирования</option>
                                                {genres.map(item => <option key={item.id} value={`${item.id}`}>{item.name}</option>)}
                                            </select>
                                            <input
                                                type={'text'}
                                                value={editGenre}
                                                disabled={!selectedGenre.id}
                                                onChange={(e) => setEditGenre(e.target.value)}
                                                style={{ width: '270px' }}
                                                className={'my-input'}
                                            />
                                            {successEdit &&
                                                <ButtonLink
                                                    title={'Сохранить'}
                                                    handlerClick={handleBtnEditGenre}
                                                />
                                            }
                                        </div>
                                        <div style={{
                                            flexBasis: '50%',
                                            padding: '0px 10px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            gap: '15px'
                                        }}>
                                            <input
                                                type={'text'}
                                                value={newGenre}
                                                onChange={(e) => setNewGenre(e.target.value)}
                                                style={{ width: '270px' }}
                                                className={'my-input'}
                                            />
                                            {successNew &&
                                                <ButtonLink
                                                    title={'Создать'}
                                                    handlerClick={handleBtnNewGenre}
                                                />
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GenresSection