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

function App() {
    const [todos, setTodos] = useState<Todo[]>(
        getTodoFromLocalStorage.length ? getTodoFromLocalStorage : [],
    )

    const [todoGroup, setTodoGroup] = useState<string[]>(
        getGroupFromLocalStorage.length
            ? getGroupFromLocalStorage
            : ['Без группы'],
    )
    const [sortedData, setSortedData] = useState<Todo[]>([])
    const [isLoad, setIsLoad] = useState(true)
    const [isOpenNewTodo, setIsOpenNewTodo] = useState(false)

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

    useEffect(() => {
        addListenerOfLoad()
        return () => removeListenerOfLoad()
    }, [])

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

    return (
        <>
            {!isLoad ? (
                <>
                    <Header />
                    <Panel
                        setSortedData={setSortedData}
                        setTodos={setTodos}
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
                        {todos?.length ? (
                            <TodoGroup
                                todos={sortedData.length ? sortedData : todos}
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
