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

    const newTodo = {
        id: listTodos.length + 2,
        parentGroupTodos: parentGroup,
        title: titleTodo,
        content: contentTodo,
        completed: false,
        rate,
    }

    const addNewTodo = () => {
        setTodos((prevState) => [...prevState, newTodo])
        console.log(newTodo)
    }
    const closeNewTodo = () => {
        parentGroup.length > 0 ? parentGroup : setParentGroup('Без группы')
        setIsOpenNewTodo((prevState) => !prevState)
        addNewTodo()
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
            <Button
                className={styles.button}
                name="Создать"
                getEvent={closeNewTodo}
            />
        </div>
    )
}

export default CreateTodo
