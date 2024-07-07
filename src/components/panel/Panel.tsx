import React, { useState } from 'react'

import Button from '../../UI/Button'
import SearchBox from './SearchBox'
import SortBox from './SortBox'
import { Todo } from '../../types'

import styles from './Panel.module.css'

const Panel = ({
    listTodos,
    setNewTodo,
    setTodoGroup,
}: {
    listTodos: Todo[]
    setNewTodo: React.Dispatch<React.SetStateAction<boolean>>
    todoGroup: string[]
    setTodoGroup: React.Dispatch<React.SetStateAction<string[]>>
}) => {
    const [openNewGroup, setOpenNewGroup] = useState(false)

    const getOpenCreateTodo = () => setNewTodo((prevState) => !prevState)

    const getOpenNewGroup = () => setOpenNewGroup((prevState) => !prevState)

    const createNewGroupTodo = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === 'Enter' && openNewGroup) {
            setTodoGroup((prevState) => [...prevState, event.target.value])
            setOpenNewGroup((prevState) => !prevState)
        }
    }

    const quantityCompletedTodo = listTodos.filter(
        (todo) => todo.completed === true,
    ).length

    return (
        <div className={styles.panel}>
            <Button
                name="Новая задача"
                getEvent={getOpenCreateTodo}
                className={styles.button}
            />
            {openNewGroup ? (
                <input
                    type="text"
                    placeholder="Введите название задачи"
                    onKeyDown={(event) => createNewGroupTodo(event)}
                />
            ) : (
                <Button
                    name="Новый список задач"
                    getEvent={getOpenNewGroup}
                    className={styles.button}
                />
            )}

            <p>
                Задач выполнено: {quantityCompletedTodo} из {listTodos.length}
            </p>
            <SearchBox />
            <SortBox />
        </div>
    )
}

export default Panel
