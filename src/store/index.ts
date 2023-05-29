import { configureStore } from '@reduxjs/toolkit'

import { authReducer, moviesReducer } from './slice'

import { authApi } from './queries/auth.queri'
import { moviesApi } from './queries/movies.queri'
import { personsApi } from './queries/persons.queri'

import { rtkQueryErrorLogger } from './middleware/errorLogger'
import {genresApi} from "@/store/queries/genres.queri";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: moviesReducer,
        [authApi.reducerPath]: authApi.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
        [personsApi.reducerPath]: personsApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(rtkQueryErrorLogger)
        .concat(authApi.middleware)
        .concat(moviesApi.middleware)
        .concat(personsApi.middleware)
        .concat(genresApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch