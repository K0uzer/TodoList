import React, { useMemo, useState } from 'react'

import Button from '../../UI/Button'
import SearchBox from './SearchBox'
import SortBox from './SortBox'
import { Todo } from '../../types'

import styles from './Panel.module.css'
import GroupList from './GroupList'

const Panel = ({
    setTodos,
    todosArray,
    listTodos,
    setNewTodo,
    todoGroup,
    setTodoGroup,
}: {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    todosArray: Todo[]
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
        if (
            event.key === 'Enter' &&
            openNewGroup &&
            event.target.value.length > 0
        ) {
            setTodoGroup((prevState) => [...prevState, event.target.value])
            setOpenNewGroup((prevState) => !prevState)
        } else if (event.key === 'Escape') {
            event.preventDefault()
            setOpenNewGroup((prevState) => !prevState)
        }
    }

    const quantityCompletedTodo = useMemo(
        () => listTodos.filter((todo) => todo.completed === true).length,
        [listTodos],
    )

    return (
        <div className={styles.panel}>
            <Button
                name="Новая задача"
                getEvent={getOpenCreateTodo}
                className={styles.button}
            />
            {openNewGroup ? (
                <input
                    className={styles.input}
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
            <GroupList
                listTodos={listTodos}
                todoGroup={todoGroup}
                setTodoGroup={setTodoGroup}
            />
            <p>
                Задач выполнено: {quantityCompletedTodo} из {listTodos.length}
            </p>
            <SearchBox setTodos={setTodos} todosArray={todosArray} />
            <SortBox />
        </div>
    )
}

export default Panel
