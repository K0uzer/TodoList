import React, { useState } from 'react'

import { Todo } from '../../types'
import RateTodo from '../../UI/RateTodo'

import styles from './CreateTodo.module.css'
import Button from '../../UI/Button'

const CreateTodo = ({
    listTodos,
    setTodos,
    setIsOpenNewTodo,
}: {
    listTodos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    setIsOpenNewTodo: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [titleTodo, setTitleTodo] = useState('')
    const [contentTodo, setContentTodo] = useState('')
    const [rate, setRate] = useState(0)

    const newTodo = {
        id: listTodos.length + 1,
        title: titleTodo,
        content: contentTodo,
        completed: false,
        rate,
    }

    const createNewTodo = () => {
        setTodos((prevState) => [...prevState, newTodo])
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
            <RateTodo rate={rate} setRate={setRate} />
            <Button
                className={styles.button}
                name="Создать"
                getEvent={createNewTodo}
            />
        </div>
    )
}

export default CreateTodo
