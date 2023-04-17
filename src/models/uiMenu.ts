export interface IUIMenu {
    id: number
    title: string
    link: string
}

export interface IUIMenuMain extends IUIMenu {
    addClass: string
}