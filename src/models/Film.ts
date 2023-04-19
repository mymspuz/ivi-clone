export interface IMainBanner {
    id: number
    banner: {
        wide: string
        narrow: string
        logo: string
    }
    title: string
    desc: string
    link: string
}

export interface IMainTop {
    id: number
    title: string
    img: string
    logo: string
    link: string
}

export interface IFilmCard {
    id: number
    title: string
    link: string
    img: string
    rating: { valueInt: number, valueFract: number }
    detailRating: { name: string, value: number }[]
    info: { first: string, second: string }
    price: { classValue: string, textValue: string }
}