import React from 'react'

import { Todo } from '../../types'

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
        <select onChange={(event) => filterGroup(event.target.value)}>
            <option key="all" value="Без фильтра групп">
                Без фильтра групп
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
