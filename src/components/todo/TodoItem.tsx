import React, { useState } from 'react'

import { Todo } from '../../types'
import EditTodoPanel from './EditTodoPanel'
import Controllers from './Controllers'
import RateTodo from '../../UI/RateTodo'
import Button from '../../UI/Button'

import styles from './TodoItem.module.css'

const TodoItem = ({
    todo,
    setTodos,
}: {
    todo: Todo
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}) => {
    const [todoItem, setTodoItem] = useState(todo)
    const [editOpen, setEditOpen] = useState(false)
    const [isTodoOpen, setIsTodoOpen] = useState(false)
    const [rate, setRate] = useState(todo.rate)

    const removeTodo = () =>
        setTodos((prevState) => prevState.filter((item) => item.id !== todo.id))

    const editTodo = () => setEditOpen((prevState) => !prevState)

    const changeStateOfTodoWindow = () => {
        setIsTodoOpen((prevState) => !prevState)
    }

    const toggleStateTodo = () => {
        setTodos((prevState) => [
            ...prevState.map((item) =>
                item.id === todo.id
                    ? { ...item, completed: !item.completed }
                    : item,
            ),
        ])
        setTodoItem((prevState) => ({
            ...prevState,
            completed: !prevState.completed,
        }))
    }

    return (
        <div className={styles.todo}>
            {!isTodoOpen && (
                <>
                    <Button
                        className={styles.button}
                        name={todoItem.title}
                        getEvent={changeStateOfTodoWindow}
                    />
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        name="compile"
                        alt="Состояние задачи"
                        checked={todoItem.completed}
                        onChange={toggleStateTodo}
                    />
                </>
            )}
            {isTodoOpen && (
                <>
                    <div className={styles.containerContent}>
                        {editOpen ? (
                            <EditTodoPanel
                                title={todoItem.title}
                                content={todoItem.content}
                                setTodoItem={setTodoItem}
                            />
                        ) : (
                            <>
                                <p className={styles.title}>{todoItem.title}</p>
                                <p className={styles.content}>
                                    {todoItem.content}
                                </p>
                            </>
                        )}
                        <div className={styles.rateContainer}>
                            <p>Оценка задачи:</p>
                            <RateTodo rate={rate} setRate={setRate} />
                        </div>
                    </div>
                    <Controllers
                        setIsTodoOpen={setIsTodoOpen}
                        editOpen={editOpen}
                        editTodo={editTodo}
                        removeTodo={removeTodo}
                    />
                </>
            )}
        </div>
    )
}

export default TodoItem
