'use client'

import React, {useEffect} from 'react'

import { addClass } from '@/utils/bodyClass'
import { MainCompilation, MainSeo, MainSlider, Teaser, TopMain } from './components'
import { useMainPageQuery } from '@/store/queries/movies.queri'
import { IMovieMainPage } from '@/models/Movie'

const defaultContext: IMovieMainPage = { top10: [], cartoons: [], foreign: [] }
const MainPageContext = React.createContext(defaultContext)

const Home: React.FC = () => {
    // addClass('body', 'home')
    // addClass('root', 'basePage__inner')

    const { data, isLoading, isError, error, isSuccess } = useMainPageQuery()

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
        isLoading
            ?
            <p>Loading...</p>
            :
            data
                ?
                    <MainPageContext.Provider value={data}>
                        <MainSlider />
                        <Teaser />
                        <TopMain />
                        <MainSeo />
                        <MainCompilation title={'Добрые мультсериалы'} movies={data.cartoons} />
                        <MainCompilation title={'Зарубежные мелодраматические сериалы'} movies={data.foreign} />
                    </MainPageContext.Provider>
                :
                    <>ErrorPage</>
    )
}

export { MainPageContext }
export default Home