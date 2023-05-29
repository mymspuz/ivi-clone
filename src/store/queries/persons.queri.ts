import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '@/store'
import {IMovie, IMovieCreator, IMovieCreatorResponse, IMovieCreatorSliderResponse} from '@/models/Movie'
import {transformPersonDetail, transformPersonName, transformPersonSlider} from '@/utils/transfromResponse'

export const personsApi = createApi({
    reducerPath: 'personsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        personById: builder.query<{ creator: IMovieCreator, movies: IMovie[] }, string>({
            query: (id) =>  ({
                url: `person/${id}`,
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IMovieCreatorResponse): { creator: IMovieCreator, movies: IMovie[] } => {
                return transformPersonDetail(response)
            }
        }),
        personByName: builder.query<{ id: number, name: string }[], { role: string, name: string }>({
            query: (params) => ({
                url: `profession/search?profession=${params.role}&name=${params.name}`,
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: { person_id: number, name: string }[]): { id: number, name: string }[] => {
                return transformPersonName(response)
            }
        }),
        personsForSlider: builder.query<IMovieCreator[], void>({
            query: () => ({
                url: `personsForSlider`,
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IMovieCreatorSliderResponse[]): IMovieCreator[] => {
                return transformPersonSlider(response)
            }
        })
    })
})

export const {
    usePersonByIdQuery,
    usePersonByNameQuery,
    useLazyPersonByNameQuery,
    usePersonsForSliderQuery
} = personsApi