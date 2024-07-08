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
import TodoGroup from './components/todo/TodoGroup'

import './App.css'

const todosArray = [
    {
        id: 0,
        parentGroupTodos: 'Без группы',
        title: 'Сойздайте свою первую задачу!',
        content: 'Моя первая задача!',
        completed: true,
        rate: 5,
    },
]

const groupArray = ['Без группы', 'work']

function App() {
    const [todos, setTodos] = useState<Todo[]>(getTodoFromLocalStorage)
    const [todoGroup, setTodoGroup] = useState(
        getGroupFromLocalStorage.length
            ? getGroupFromLocalStorage
            : ['Без группы'],
    )
    const [isLoad, setIsLoad] = useState(true)
    const [isOpenNewTodo, setIsOpenNewTodo] = useState(false)

    useEffect(() => {
        window.localStorage.setItem('Todos', JSON.stringify(todosArray))
        window.localStorage.setItem('Group', JSON.stringify(groupArray))
    }, [])

    const addListenerOfLoad = () =>
        window.addEventListener(
            'load ',
            setIsLoad((prevState) => !prevState),
        )

    const removeListenerOfLoad = () =>
        window.removeEventListener(
            'load ',
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

    return (
        <>
            {!isLoad ? (
                <>
                    <Header />
                    <Panel
                        setTodos={setTodos}
                        todosArray={todosArray}
                        listTodos={todos}
                        setIsOpenNewTodo={setIsOpenNewTodo}
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
