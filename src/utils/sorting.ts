import {IMovie, TSorting} from '@/models/Movie'

export const sortingMovies = (name: TSorting, src: IMovie[]): IMovie[] => {
    if (name === 'date') return sortingDate(src)
    if (name === 'vote') return sortingVote(src)
    if (name === 'rating') return sortingRating(src)
    return sortingName(src)
}

const sortingName = (src: IMovie[]): IMovie[] => {
    return src.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    })
}

const sortingRating = (src: IMovie[]): IMovie[] => {
    return src.sort((a, b) => {
        const nameA = Number(`${a.rating.valueInt}.${a.rating.valueFract}`)
        const nameB = Number(`${b.rating.valueInt}.${b.rating.valueFract}`)
        if (nameA < nameB) return 1
        if (nameA > nameB) return -1
        return 0
    })
}

const sortingVote = (src: IMovie[]): IMovie[] => {
    return src.sort((a, b) => {
        const nameA = a.votes
        const nameB = b.votes
        if (nameA < nameB) return 1
        if (nameA > nameB) return -1
        return 0
    })
}

const sortingDate = (src: IMovie[]): IMovie[] => {
    return src.sort((a, b) => {
        const nameA = a.yearRelease.start
        const nameB = b.yearRelease.start
        if (nameA < nameB) return 1
        if (nameA > nameB) return -1
        return 0
    })
}