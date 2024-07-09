import React from 'react'

import { Todo } from '../../types'
import { getTodoFromLocalStorage } from '../../function/localStorage'

import styles from './SearchBox.module.css'

const SearchBox = ({
    setTodos,
}: {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}) => {
    const searchData = (value: string) =>
        value.length > 3 &&
        setTodos(() =>
            getTodoFromLocalStorage().filter((item: Todo) =>
                item.title.includes(value),
            ),
        )

    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Поиск по названию"
            onChange={(event) => searchData(event.target.value)}
        />
    )
}

export default SearchBox
