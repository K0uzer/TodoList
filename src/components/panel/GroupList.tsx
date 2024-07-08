import React from 'react'

import { Todo } from '../../types'

import styles from './GroupList.module.css'

const GroupList = ({
    listTodos,
    todoGroup,
    setTodoGroup,
}: {
    listTodos: Todo[]
    todoGroup: string[]
    setTodoGroup: React.Dispatch<React.SetStateAction<string[]>>
}) => {
    const filterGroup = (value: string) =>
        setTodoGroup(todoGroup.filter((item) => item === value))

    return (
        <select
            className={styles.select}
            onChange={(event) => filterGroup(event.target.value)}
        >
            <option key="all" value="Без фильтра">
                Без фильтра
            </option>
            {todoGroup.map((group) => (
                <option key={group} value={group}>
                    {group}
                </option>
            ))}
        </select>
    )
}

export default GroupList
