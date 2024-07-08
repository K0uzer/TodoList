import { Todo } from '../../types'

export const todoFromLocalStorage: Todo[] = JSON.parse(
    window.localStorage.getItem('Todos'),
)

export const groupFromLocalStorage: string = JSON.parse(
    window.localStorage.getItem('Group'),
)
