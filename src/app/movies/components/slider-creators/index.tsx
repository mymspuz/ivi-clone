import React, {useEffect} from 'react'

import { GalleryCarousel } from '../../../../components'
import MoviesSliderCreatorsItem from './MoviesSliderCreatorsItem'
import { usePersonsForSliderQuery } from '@/store/queries/persons.queri'

const MoviesSliderCreators: React.FC = () => {

    const {
        data,
        isLoading,
        isError,
        error, isSuccess
    } = usePersonsForSliderQuery()

    useEffect(() => {
        if (isError) {
            if (Array.isArray((error as any).data.error)) {
                (error as any).data.error.forEach((el: any) => console.log(el.message))
            } else {
                console.log((error as any).data.message)
            }
        }
    }, [isLoading])

    return (
        <section className="pageSection catalog__pageSection">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="gallery catalog__gallery">
                        <div className="gallery__header">
                            <span className="gallery__headerLink">Персоны</span>
                        </div>
                        {(!isLoading && data) &&
                            <GalleryCarousel size={{ width: 153, padding: 24 }} type={'big'}>
                                {data.map(creator =>
                                    <MoviesSliderCreatorsItem key={creator.id} data={creator} />)
                                }
                            </GalleryCarousel>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesSliderCreators