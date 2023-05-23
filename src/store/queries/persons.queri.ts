import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '@/store'
import { IMovie, IMovieCreator, IMovieCreatorResponse } from '@/models/Movie'
import { transformPersonDetail } from '@/utils/transfromResponse'

export const personsApi = createApi({
    reducerPath: 'personsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/person/`,
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
                url: `${id}`,
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IMovieCreatorResponse): { creator: IMovieCreator, movies: IMovie[] } => {
                return transformPersonDetail(response)
            }
        })
    })
})

export const {
    usePersonByIdQuery
} = personsApi