import React from 'react'

import { Todo } from '../../types'
import { todoFromLocalStorage } from '../function/localStorage'

const SearchBox = ({
    setTodos,
    todosArray,
}: {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    todosArray: Todo[]
}) => {
    const searchData = (value: string) =>
        setTodos(() =>
            todoFromLocalStorage.filter((item) => item.title === value),
        )

    return (
        <input
            type="text"
            placeholder="Поиск по названию"
            onChange={(event) => searchData(event.target.value)}
        />
    )
}

export default SearchBox
