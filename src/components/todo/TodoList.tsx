import React from 'react'

import TodoItem from './TodoItem'
import { Todo } from '../../types'

import stales from './TodoList.module.css'

const TodoList = ({
    listTodos,
    setTodos,
}: {
    listTodos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}) => {
    return (
        <ul className={stales.todoList}>
            {listTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            ))}
        </ul>
    )
}

export default TodoList
