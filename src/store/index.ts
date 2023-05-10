import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slice'

import { authApi } from './queries/auth.queri'
import { moviesApi } from './queries/movies.queri'
import { personsApi } from './queries/persons.queri'

import { rtkQueryErrorLogger } from './middleware/errorLogger'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
        [personsApi.reducerPath]: personsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(rtkQueryErrorLogger)
        .concat(authApi.middleware)
        .concat(moviesApi.middleware)
        .concat(personsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch