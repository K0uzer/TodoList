import React, { useMemo, useState } from 'react'

import Button from '../../UI/Button'
import SearchBox from './SearchBox'
import { Todo } from '../../types'

import styles from './Panel.module.css'
import GroupList from './GroupList'
import {
    clearLocalStorageElement,
    setGroupFromLocalStorage,
} from '../../function/localStorage'

const Panel = ({
    setSortedData,
    listTodos,
    setIsOpenNewTodo,
    todoGroup,
    setTodoGroup,
}: {
    setSortedData: React.Dispatch<React.SetStateAction<Todo[]>>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    listTodos: Todo[]
    setIsOpenNewTodo: React.Dispatch<React.SetStateAction<boolean>>
    todoGroup: string[]
    setTodoGroup: React.Dispatch<React.SetStateAction<string[]>>
}) => {
    const [openNewGroup, setOpenNewGroup] = useState(false)

    const getOpenCreateTodo = () => setIsOpenNewTodo((prevState) => !prevState)

    const getOpenNewGroup = () => setOpenNewGroup((prevState) => !prevState)

    const createNewGroupTodo = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        const target = event.target as HTMLInputElement

        if (event.key === 'Enter' && openNewGroup && target.value.length > 0) {
            setTodoGroup((prevState) => {
                const newGroup = [...prevState, target.value]
                clearLocalStorageElement('Group')
                setGroupFromLocalStorage()
                return newGroup
            })
            setOpenNewGroup((prevState) => !prevState)
        } else if (event.key === 'Escape') {
            event.preventDefault()
            setOpenNewGroup((prevState) => !prevState)
        }
    }

    const quantityCompletedTodo = useMemo(
        () =>
            listTodos.length
                ? listTodos.filter((todo) => todo.completed === true).length
                : [],
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
            <SearchBox listTodos={listTodos} setSortedData={setSortedData} />
            {!!listTodos.length && (
                <p className={styles.quantityTodos}>
                    Задач выполнено:
                    {quantityCompletedTodo}
                    из
                    {listTodos.length}
                </p>
            )}
        </div>
    )
}

export default Panel
