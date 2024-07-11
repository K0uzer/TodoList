export const getTodoFromLocalStorage = () => {
    const todos = window.localStorage.getItem('Todos')
    return todos ? JSON.parse(todos) : []
}

export const setTodoFromLocalStorage = (array: string) =>
    JSON.stringify(window.localStorage.setItem('Todos', array))

export const getGroupFromLocalStorage = (): string[] => {
    const group = window.localStorage.getItem('Group')
    return group ? JSON.parse(group) : []
}

export const setGroupFromLocalStorage = () =>
    JSON.stringify(window.localStorage.getItem('Group'))

export const setTodoLocalStorage = (newState: string[]) =>
    window.localStorage.setItem('Todos', JSON.stringify('Todos', newState))

export const clearLocalStorageElement = (element: string) => {
    window.localStorage.removeItem(element)
}
