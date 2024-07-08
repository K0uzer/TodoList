import React, { useState } from 'react'

import { Todo } from '../../types'
import RateTodo from '../../UI/RateTodo'

import styles from './CreateTodo.module.css'
import Button from '../../UI/Button'

const CreateTodo = ({
    listTodos,
    setTodos,
    setIsOpenNewTodo,
    todoGroup,
}: {
    listTodos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    setIsOpenNewTodo: React.Dispatch<React.SetStateAction<boolean>>
    todoGroup: string[]
}) => {
    const [titleTodo, setTitleTodo] = useState('')
    const [contentTodo, setContentTodo] = useState('')
    const [parentGroup, setParentGroup] = useState('')
    const [rate, setRate] = useState(0)

    const dateCurrent = Date.now()

    const newTodo = {
        id: dateCurrent,
        parentGroupTodos: parentGroup.length > 0 ? parentGroup : 'Без группы',
        title: titleTodo,
        content: contentTodo,
        completed: false,
        rate,
    }

    const addNewTodo = () => {
        setTodos((prevState) => [...prevState, newTodo])
        console.log(listTodos)
        JSON.stringify(window.localStorage('Todos', listTodos))
        console.log(newTodo)
    }

    const closeNewTodo = () => {
        if (titleTodo.length > 0 && contentTodo.length > 0) addNewTodo()
        setIsOpenNewTodo((prevState) => !prevState)
    }

    return (
        <div className={styles.createTodo}>
            <input
                value={titleTodo}
                onChange={(event) => setTitleTodo(event.target.value)}
                placeholder="Имя задачи"
            />
            <textarea
                value={contentTodo}
                onChange={(event) => setContentTodo(() => event.target.value)}
                placeholder="Описание задачи"
            ></textarea>
            <select
                value={parentGroup}
                onChange={(event) => setParentGroup(() => event.target.value)}
            >
                {todoGroup.map((group) => (
                    <option key={group} value={group}>
                        {group}
                    </option>
                ))}
            </select>
            <RateTodo rate={rate} setRate={setRate} />
            <div>
                <Button
                    className={styles.button}
                    name="Создать"
                    getEvent={closeNewTodo}
                />
                <Button
                    className={styles.button}
                    name="Закрыть"
                    getEvent={closeNewTodo}
                />
            </div>
        </div>
    )
}

export default CreateTodo
