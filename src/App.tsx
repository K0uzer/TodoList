import { useEffect, useState } from 'react'

import Header from './components/header/Header'
import ContentContainer from './components/todo/ContentContainer'
import TodoList from './components/todo/TodoList'
import EmptyList from './UI/EmptyList'
import Loader from './components/loader/Loader'
import { Todo } from './types'
import Panel from './components/panel/Panel'
import CreateTodo from './components/todo/CreateTodo'

import './App.css'

function App() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: '12', content: 'daw', completed: true, rate: 1 },
        { id: 2, title: '12', content: 'daw', completed: false, rate: 2 },
        { id: 3, title: '12', content: 'daw', completed: true, rate: 3 },
        { id: 4, title: '12', content: 'daw', completed: false, rate: 1 },
        { id: 5, title: '12', content: 'daw', completed: true, rate: 4 },
    ])
    const [isLoad, setIsLoad] = useState(false)
    const [isOpenNewTodo, setIsOpenNewTodo] = useState(false)

    // const loader = () => setIsLoad((prevState) => !prevState)

    useEffect(() => {
        // window.addEventListener('load', loader)

        return () => {
            // window.removeEventListener('load', loader)
        }
    })

    return (
        <>
            {!isLoad ? (
                <>
                    <Header />
                    <Panel listTodos={todos} setNewTodo={setIsOpenNewTodo} />
                    {isOpenNewTodo && (
                        <CreateTodo
                            listTodos={todos}
                            setTodos={setTodos}
                            setIsOpenNewTodo={setIsOpenNewTodo}
                        />
                    )}
                    <ContentContainer>
                        {todos.length ? (
                            <TodoList
                                listTodos={todos}
                                setListTodos={setTodos}
                            />
                        ) : (
                            <EmptyList />
                        )}
                    </ContentContainer>
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default App
