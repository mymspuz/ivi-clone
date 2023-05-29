import ButtonLink from './ButtonLink'

export default {
    component: ButtonLink,
    title: 'BtnLink',
    tags: ['btn-link']
}

export const Default = {
    args: {
        title: 'Кнопка'
    }
}

export const Icon = {
    args: {
        icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg',
        link: '#',
    }
}

export const SubTitle = {
    args: {
        title: 'Кнопка',
        subTitle: 'Смотрите на',
        icon: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg',
        link: '#',
    }
}