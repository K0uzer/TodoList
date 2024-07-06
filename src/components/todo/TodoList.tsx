import React from 'react'

import TodoItem from './TodoItem'
import { Todo } from '../../types'

import stales from './TodoList.module.css'

const TodoList = ({
    listTodos,
    setListTodos,
}: {
    listTodos: Todo[]
    setListTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}) => {
    return (
        <ul className={stales.todoList}>
            {listTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} setTodos={setListTodos} />
            ))}
        </ul>
    )
}

export default TodoList
