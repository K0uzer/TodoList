import { todo } from '../../types'

const TodoList = () => {
    const todos: todo[] = [{ title: '12', content: 'ok' }]
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.title}>{todo.content}</li>
            ))}
        </ul>
    )
}

export default TodoList
