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
        {
            id: 0,
            parentGroupTodos: 'Без группы',
            title: '12',
            content: 'daw',
            completed: true,
            rate: 1,
        },
        {
            id: 1,
            parentGroupTodos: 'Без группы',
            title: '12',
            content: 'daw',
            completed: false,
            rate: 2,
        },
        {
            id: 2,
            parentGroupTodos: 'work',
            title: '12',
            content: 'daw',
            completed: true,
            rate: 3,
        },
        {
            id: 3,
            parentGroupTodos: 'Без группы',
            title: '12',
            content: 'daw',
            completed: false,
            rate: 1,
        },
        {
            id: 4,
            parentGroupTodos: 'work',
            title: '12',
            content: 'daw',
            completed: true,
            rate: 4,
        },
    ])
    const [todoGroup, setTodoGroup] = useState(['Без группы', 'work'])
    const [isLoad, setIsLoad] = useState(false)
    const [isOpenNewTodo, setIsOpenNewTodo] = useState(false)

    const addListenerOfLoad = () =>
        window.addEventListener('load ', () =>
            setIsLoad((prevState) => !prevState),
        )

    const removeListenerOfLoad = () =>
        window.removeEventListener('load ', () =>
            setIsLoad((prevState) => !prevState),
        )

    useEffect(() => {
        addListenerOfLoad()
        console.log(1)
        return () => {
            removeListenerOfLoad()
        }
    }, [])

    const filteredTodos = (array: Todo[], titleGroup: string) =>
        array.filter((element) => element.parentGroupTodos === titleGroup)

    return (
        <>
            {!isLoad ? (
                <>
                    <Header />
                    <Panel
                        listTodos={todos}
                        setNewTodo={setIsOpenNewTodo}
                        todoGroup={todoGroup}
                        setTodoGroup={setTodoGroup}
                    />
                    {isOpenNewTodo && (
                        <CreateTodo
                            listTodos={todos}
                            setTodos={setTodos}
                            setIsOpenNewTodo={setIsOpenNewTodo}
                            todoGroup={todoGroup}
                        />
                    )}
                    <ContentContainer>
                        {todos.length ? (
                            todoGroup.map((item) => (
                                <div key={item}>
                                    <h2>{item}</h2>
                                    <TodoList
                                        listTodos={filteredTodos(todos, item)}
                                        setListTodos={setTodos}
                                    />
                                </div>
                            ))
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
