import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { RootState } from '../index'
import {IMovie, IMovieDetailResponse, IMovieMainPage, IMovieResponseMainPage} from '../../models/Movie'
import { transformMovieDetail, transformMovies } from '../../utils/transfromResponse'

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
        movieById: builder.query<IMovie, string>({
            query: (id) =>  ({
                url: `${id}`,
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IMovieDetailResponse): IMovie => {
                return transformMovieDetail(response)
            }
        })
    })
})

export const {
    useMainPageQuery,
    useMovieByIdQuery,
} = moviesApi