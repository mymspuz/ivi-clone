import {BaseQueryApi, createApi, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { RootState } from '@/store'
import {
    IMovie,
    IMovieDetailResponse,
    IMovieMainPage,
    IMovieResponse,
    IMovieResponseMainPage,
    IMoviesPage
} from '@/models/Movie'
import { transformMovieDetail, transformMovies } from '@/utils/transfromResponse'
import {useAppSelector} from "../hooks";

type TIdName = {
    id: number
    name: string
}

type TParams = {
    genres: TIdName[]
    countries: TIdName[]
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/movies/`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        mainPage: builder.query<IMovieMainPage, void>({
            query: () => ({
                url: 'startPage',
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IMovieResponseMainPage): IMovieMainPage => {
                return {
                    top10: transformMovies(response.top10),
                    cartoons: transformMovies(response.cartoons),
                    foreign: transformMovies(response.foreign),
                }
            }
        }),
        movies: builder.query<IMoviesPage, TParams>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const movies = _arg
                const result: IMoviesPage = {} as IMoviesPage
                // TOPS
                const tops = await fetchWithBQ('top')
                if (tops.error) return { error: tops.error as FetchBaseQueryError }
                result.tops = transformMovies(tops.data as IMovieResponse[])
                // NEWS
                const news = await fetchWithBQ('newFilms')
                if (news.error) return { error: news.error as FetchBaseQueryError }
                result.news = transformMovies(news.data as IMovieResponse[])
                // GENRES
                if (movies.genres.length) {
                    result.genres = [...movies.genres]
                } else {
                    const genres = await fetchWithBQ('genres')
                    if (genres.error) return { error: genres.error as FetchBaseQueryError }
                    result.genres = (genres.data as { name: string }[]).map((g, index) => {
                        return { id: index, name: g.name }
                    })
                }
                // COUNTRIES
                if (movies.countries.length) {
                    result.countries = [...movies.countries]
                } else {
                    const countries = await fetchWithBQ('countries')
                    if (countries.error) return { error: countries.error as FetchBaseQueryError }
                    result.countries = (countries.data as { name: string }[]).map((c, index) => {
                        return { id: index, name: c.name }
                    })
                }
                // CREATORS
                const creators = await fetchWithBQ('1')
                if (creators.error) return { error: creators.error as FetchBaseQueryError }
                result.creators = transformMovieDetail(creators.data as IMovieDetailResponse).creators

                return { data: result }
            }
        }),
        movieById: builder.query<IMovie, string>({
            query: (id) =>  ({
                url: `${id}`,
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IMovieDetailResponse): IMovie => {
                return transformMovieDetail(response)
            }
        }),
        movieByFilter: builder.query<IMovie[], string>({
            query: (params) => ({
                url: `search${params}`,
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IMovieResponse[]): IMovie[] => {
                return transformMovies(response)
            }
        })
    })
})

export const {
    useMainPageQuery,
    useMovieByIdQuery,
    useMoviesQuery,
    useMovieByFilterQuery
} = moviesApi