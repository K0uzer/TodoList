import { useEffect, useState } from 'react'

import Header from './components/header/Header'
import ContentContainer from './components/todo/ContentContainer'
import Loader from './components/loader/Loader'
import Panel from './components/panel/Panel'
import CreateTodo from './components/todo/CreateTodo'
import EmptyList from './UI/EmptyList'
import { Todo } from './types'
import {
    getGroupFromLocalStorage,
    getTodoFromLocalStorage,
} from './function/localStorage'

import './App.css'
import TodoGroup from './components/todo/TodoGroup'

const todosArray = [
    {
        id: 0,
        parentGroupTodos: 'Без группы',
        title: 'Купить что-то там ',
        content: 'daw',
        completed: true,
        rate: 1,
    },
    {
        id: 1,
        parentGroupTodos: 'Без группы',
        title: 'Купить что-то там',
        content: 'daw',
        completed: false,
        rate: 2,
    },
    {
        id: 2,
        parentGroupTodos: 'work',
        title: 'Не Купить что-то там да-да-да',
        content: 'daw',
        completed: true,
        rate: 3,
    },
    {
        id: 3,
        parentGroupTodos: 'Без группы',
        title: 'Apple 12',
        content: 'Купить что-то там',
        completed: false,
        rate: 1,
    },
    {
        id: 4,
        parentGroupTodos: 'work',
        title: 'Купить что-то там',
        content: 'daw',
        completed: true,
        rate: 4,
    },
]

const groupArray = ['Без группы', 'work']

window.localStorage.setItem('Todos', JSON.stringify(todosArray))
window.localStorage.setItem('Group', JSON.stringify(groupArray))

function App() {
    const [todos, setTodos] = useState<Todo[]>(getTodoFromLocalStorage)
    const [todoGroup, setTodoGroup] = useState(getGroupFromLocalStorage)
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

    const removeGroup = (group: string) => {
        setTodoGroup((prevState) => prevState.filter((item) => item !== group))
        setTodos(
            todos.map((item) =>
                item.parentGroupTodos === group
                    ? { ...item, parentGroupTodos: 'Без группы' }
                    : item,
            ),
        )
    }

    useEffect(() => {
        addListenerOfLoad()
        console.log(1)
        return () => {
            removeListenerOfLoad()
        }
    }, [])

    const sortTodos = () => {}

    return (
        <>
            {!isLoad ? (
                <>
                    <Header />
                    <Panel
                        setTodos={setTodos}
                        todosArray={todosArray}
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
                            <TodoGroup
                                todos={todos}
                                todoGroup={todoGroup}
                                setTodos={setTodos}
                                removeGroup={removeGroup}
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
