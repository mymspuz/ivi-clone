import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFilterType } from '@/models/Movie'
import { IMovie, TFilters, TMoviesState, TSorting, TIdName } from '@/models/Movie'
import { sortingMovies } from '@/utils/sorting'
import { dataSorting } from '@/data/dataMovie'
import { getIsFilter, getSearchParams } from '@/utils/urlParams'

type TFilterChange = {
    type: IFilterType
    value: string
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
        actors: '',
        directors: '',
        ratings: 0,
        votes: 0
    },
    isFilter: false,
    page: 1,
    movies: [],
    searchParams: '',
    sorting: dataSorting[3]
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
            if (action.payload.type === 'votes') state.filters.votes = Number(action.payload.value)
            if (action.payload.type === 'actors') state.filters.actors = state.filters.actors === action.payload.value ? '' : action.payload.value
            if (action.payload.type === 'directors') state.filters.directors = state.filters.directors === action.payload.value ? '' : action.payload.value

            state.isFilter = getIsFilter(state.filters)
            state.page = 1
            state.movies = []
            state.searchParams = getSearchParams(state)
        },
        resetFilters: (state) => {
            state.filters = {...initialState.filters}
            state.isFilter = false
            state.page = 1
            state.movies = []
            state.searchParams = ''
        },
        setMovies: (state, action: PayloadAction<IMovie[]>) => {
            if (action.payload.length && state.movies.some(m => m.id === action.payload[0].id)) return
            const movies = state.page === 1 ? [...action.payload] : [...state.movies, ...action.payload]
            state.movies = sortingMovies(state.sorting.type, movies)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
            state.searchParams = getSearchParams(state)
        },
        setSortingParams: (state, action: PayloadAction<{ id: number, name: string, type: TSorting }>) => {
            state.sorting = action.payload
            state.movies = sortingMovies(action.payload.type, state.movies)
        },
        setFiltersFromUrl: (state, action: PayloadAction<{ filters: TFilters, page: number }>) => {
            state.filters = { ...action.payload.filters }
            state.isFilter = getIsFilter(state.filters)
            state.page = action.payload.page
            state.movies = []
            state.searchParams = getSearchParams(state)
        }
    }
})

export const {
    setGenres,
    setCountries,
    setFilters,
    resetFilters,
    setMovies,
    setPage,
    setSortingParams,
    setFiltersFromUrl
} = moviesSlice.actions

export default moviesSlice.reducer