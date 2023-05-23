export const addClass = (selector: 'body' | 'root', value: string): void => {
    if (selector === 'body') {
        if (typeof document !== "undefined") document.body.classList.add(value)
    } else {
        const root = (typeof document !== "undefined") ? document.getElementById('root') : null
        if (root) root.classList.add(value)
    }
}