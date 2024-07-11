import React from 'react'

import Button from '../../UI/Button'
import TodoList from './TodoList'
import { Todo } from '../../types'

import styles from './TodoGroup.module.css'

const TodoGroup = ({
    todos,
    todoGroup,
    setTodos,
    removeGroup,
}: {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    todoGroup: string[]
    removeGroup: (group: string) => void
}) => {
    const newKey = new Date().getTime()

    const filteredTodos = (array: Todo[], titleGroup: string) => {
        return array.filter(
            (element) => element.parentGroupTodos === titleGroup,
        )
    }

    return (
        <>
            {todoGroup.map((group, index) => (
                <div key={newKey + index}>
                    <div className={styles.group}>
                        <h3>{group}</h3>
                        {group !== 'Без группы' && (
                            <Button
                                className={styles.button}
                                name="Удалить группу"
                                getEvent={() => removeGroup(group)}
                            />
                        )}
                    </div>
                    <TodoList
                        listTodos={filteredTodos(todos, group)}
                        setTodos={setTodos}
                    />
                </div>
            ))}
        </>
    )
}

export default TodoGroup
