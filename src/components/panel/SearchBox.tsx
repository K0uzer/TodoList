import React from 'react'

import { Todo } from '../../types'

import styles from './SearchBox.module.css'

const SearchBox = ({
    setSortedData,
    listTodos,
}: {
    setSortedData: React.Dispatch<React.SetStateAction<Todo[]>>
    listTodos: Todo[]
}) => {
    const searchData = (value: string) => {
        setSortedData(() =>
            listTodos.filter((item: Todo) => item.title.includes(value)),
        )
    }

    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Поиск по названию"
            onChange={(event) =>
                event.target.value.length > 1 && searchData(event.target.value)
            }
        />
    )
}

export default SearchBox
