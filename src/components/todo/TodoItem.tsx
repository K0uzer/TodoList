import React, { useState } from 'react'

import { Todo } from '../../types'
import EditTodoPanel from './EditTodoPanel'
import Controllers from './Controllers'
import RateTodo from '../../UI/RateTodo'

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
    const [rate, setRate] = useState(todo.rate)

    const removeTodo = () =>
        setTodos((prevState) => prevState.filter((item) => item.id !== todo.id))

    const editTodo = () => setEditOpen((prevState) => !prevState)

    const toggleStateTodo = () =>
        setTodoItem((prevState) => ({
            ...prevState,
            completed: !prevState.completed,
        }))

    return (
        <div className={styles.todo}>
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
                        <p className={styles.content}>{todoItem.content}</p>
                    </>
                )}
                <RateTodo rate={rate} setRate={setRate} />
            </div>
            <Controllers
                todoItem={todoItem}
                editOpen={editOpen}
                editTodo={editTodo}
                removeTodo={removeTodo}
                toggleStateTodo={toggleStateTodo}
            />
        </div>
    )
}

export default TodoItem
