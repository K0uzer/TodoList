import { Todo } from '../types'

export const getTodoFromLocalStorage: Todo[] = () =>
    JSON.parse(window.localStorage.getItem('Todos'))

export const getGroupFromLocalStorage: string[] = () =>
    JSON.parse(window.localStorage.getItem('Group'))

export const setTodoLocalStorage = (newState: Todo[]) =>
    window.localStorage.setItem('Todos', JSON.stringify('Todos', newState))

export const removerTodos = () => window.localStorage.remove('Todos')
