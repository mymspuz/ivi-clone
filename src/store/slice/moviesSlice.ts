import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFilterType } from '../../models/Movies'
import {IMovie} from "../../models/Movie";

type TIdName = {
    id: number
    name: string
}

type TFilterChange = {
    type: IFilterType
    value: string
}

type TMoviesState = {
    genres: TIdName[]
    countries: TIdName[]
    years: TIdName[]
    filters: {
        genres: string[]
        years: string
        countries: string[]
        ratings: number
        creators: string
    }
    isFilter: boolean
    page: number
    movies: IMovie[]
}

const changeFilterItems = (src: string[], value: string): string[] => {
    const result = [...src]
    if (result.includes(value)) {
        return result.filter(i => i !== value)
    } else {
        result.push(value)
    }
    return result
}

const initialState: TMoviesState = {
    genres: [],
    countries: [],
    years: Array.from(Array(15).keys()).map(
        item => item ? { id: item, name: String(2024 - item) } : { id: 0, name: 'Все годы' }
    ),
    filters: {
        genres: [],
        years: 'Все годы',
        countries: [],
        creators: '',
        ratings: 0
    },
    isFilter: false,
    page: 1,
    movies: []
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<TIdName[]>) => {
            state.genres = [...action.payload]
        },
        setCountries: (state, action: PayloadAction<TIdName[]>) => {
            state.countries = [...action.payload]
        },
        setFilters: (state, action: PayloadAction<TFilterChange>) => {
            if (action.payload.type === 'genres') state.filters.genres = changeFilterItems(state.filters.genres, action.payload.value)
            if (action.payload.type === 'countries') state.filters.countries = changeFilterItems(state.filters.countries, action.payload.value)
            if (action.payload.type === 'years') state.filters.years = action.payload.value
            if (action.payload.type === 'ratings') state.filters.ratings = Number(action.payload.value)
            if (action.payload.type === 'creators') state.filters.creators = action.payload.value

            state.isFilter =    state.filters.genres.length !== 0 ||
                                state.filters.years !== 'Все годы' ||
                                state.filters.countries.length !== 0 ||
                                state.filters.creators !== '' ||
                                state.filters.ratings !== 0
            state.page = 1
            state.movies = []
        },
        resetFilters: (state) => {
            state.filters = {...initialState.filters}
            state.isFilter = false
            state.page = 1
            state.movies = []
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setMovies: (state, action: PayloadAction<IMovie[]>) => {
            state.movies = [...state.movies, ...action.payload]
        }
    }
})

export const {
    setGenres,
    setCountries,
    setFilters,
    resetFilters,
    setPage,
    setMovies
} = moviesSlice.actions

export default moviesSlice.reducer