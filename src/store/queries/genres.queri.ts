import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {RootState} from "@/store";
import {IGenresResponse } from "@/models/Movie";
import {transformGenres } from "@/utils/transfromResponse";

export const genresApi = createApi({
    reducerPath: 'genresApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/genres/`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getAll: builder.query<{ id: number, name: string }[], void>({
            query: () => ({
                url: '',
                method: 'GET',
                credentials: 'include'
            }),
            transformResponse: (response: IGenresResponse[]): { id: number, name: string }[] => {
                return transformGenres(response)
            }
        }),
        updateGenre: builder.mutation<{ genre_id: number, name: string }, { id: number, name: string }>({
            query: (params) => ({
                url: '',
                method: 'PUT',
                credentials: 'include',
                body: params
            })
        }),
        createGenre: builder.mutation<{ genre_id: number, name: string }, { name: string }>({
            query: (params) => ({
                url: '',
                method: 'POST',
                credentials: 'include',
                body: params
            })
        }),
    })
})

export const {
    useGetAllQuery,
    useUpdateGenreMutation,
    useCreateGenreMutation
} = genresApi