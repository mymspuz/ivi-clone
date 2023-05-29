import { ReadonlyURLSearchParams } from 'next/navigation'
import { TFilters, TMoviesState } from '@/models/Movie'

export const getParamsFromUrl = (searchParams: ReadonlyURLSearchParams): { filters: TFilters, page: number } => {

    const result: { filters: TFilters, page: number } = {
        filters: {
            genres: [],
            years: '',
            countries: [],
            ratings: 0,
            votes: 0,
            actors: '',
            directors: '',
        },
        page: 1
    }

    if (searchParams.has('genre')) {
        let value = searchParams.get('genre')
        result.filters.genres = value ? value.split(' ') : []
    }
    if (searchParams.has('year')) result.filters.years = String(searchParams.get('year'))
    if (searchParams.has('country')) {
        let value = searchParams.get('country')
        result.filters.countries = value ? value.split(' ') : []
    }
    if (searchParams.has('rating')) result.filters.ratings =  Number(searchParams.get('rating'))
    if (searchParams.has('marksCount')) result.filters.votes =  Number(searchParams.get('marksCount'))
    if (searchParams.has('actor')) result.filters.actors =  String(searchParams.get('actor'))
    if (searchParams.has('director')) result.filters.directors =  String(searchParams.get('director'))
    if (searchParams.has('page')) result.page =  Number(searchParams.get('page'))

    return result
}

export const getSearchParams = (src: TMoviesState): string => {
    let result: string = ''
    let sep = '?'
    if (src.filters.genres.length) {
        result += `${sep}genre=${src.filters.genres.join('%2B')}`
        sep = '&'
    }
    if (src.filters.countries?.length) {
        result += `${sep}country=${src.filters.countries.join('%2B')}`
        sep = '&'
    }
    if (src.filters.years !== 'Все годы') {
        result += `${sep}year=${src.filters.years}`
        sep = '&'
    }
    if (src.filters.actors) {
        result += `${sep}actor=${src.filters.actors}`
        sep = '&'
    }
    if (src.filters.directors) {
        result += `${sep}director=${src.filters.directors}`
        sep = '&'
    }
    if (src.filters.ratings) {
        result += `${sep}rating=${src.filters.ratings}`
        sep = '&'
    }
    if (src.filters.votes) {
        result += `${sep}marksCount=${src.filters.votes}`
        sep = '&'
    }
    if (src.page) {
        result += `${sep}page=${src.page}`
    }
    return result
}

export const getIsFilter = (filters: TFilters): boolean => {
    return  filters.genres.length !== 0 ||
            filters.years !== 'Все годы' ||
            filters.countries.length !== 0 ||
            filters.actors !== '' ||
            filters.directors !== '' ||
            filters.ratings !== 0 ||
            filters.votes !== 0
}

export const getBreadCrumbs = (filters: TFilters): { name: string, link: string }[] => {

    const result: { name: string, link: string }[] = []

    if (filters.genres.length) filters.genres.forEach(item => result.push({ name: item, link: `?genre=${item}` }))
    if (filters.countries.length) filters.countries.forEach(item => result.push({ name: item, link: `?country=${item}` }))
    if (filters.years !== 'Все годы') result.push({ name: filters.years, link: `?year=${filters.years}` })

    return result
}