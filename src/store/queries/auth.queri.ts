import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { RootState } from '@/store'
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_HOST_SERVER}/auth/`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (payload) => ({
                url: 'login',
                method: 'POST',
                body: payload
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                } catch (error) {}
            },
        }),
        loginSocial: builder.mutation({
            query: (payload) => ({
                url: 'login/social',
                method: 'POST',
                body: payload
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                } catch (error) {}
            },
        })
    }),
})

export const {
    useLoginUserMutation,
    useLoginSocialMutation
} = authApi