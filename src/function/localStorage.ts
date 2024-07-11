import { Todo } from '../types'

export const getTodoFromLocalStorage = () =>
    JSON.parse(window.localStorage.getItem('Todos'))

export const setTodoFromLocalStorage = (array: string) =>
    JSON.stringify(window.localStorage.setItem('Todos', array))

export const getGroupFromLocalStorage = () =>
    JSON.parse(window.localStorage.getItem('Group'))

export const setGroupFromLocalStorage = (array: string[]) =>
    JSON.stringify(window.localStorage.getItem('Group', array))

export const setTodoLocalStorage = (newState: string[]) =>
    window.localStorage.setItem('Todos', JSON.stringify('Todos', newState))

export const clearLocalStorageElement = (element: string) => {
    window.localStorage.removeItem(element)
}
