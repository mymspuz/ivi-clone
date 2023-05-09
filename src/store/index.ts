import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slice'

import { authApi } from './queries/auth.queri'
import { moviesApi } from './queries/movies.queri'

import { rtkQueryErrorLogger } from './middleware/errorLogger'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(rtkQueryErrorLogger)
        .concat(authApi.middleware)
        .concat(moviesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch