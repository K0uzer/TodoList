import React from 'react'

import Button from '../../UI/Button'
import SearchBox from './SearchBox'
import SortBox from './SortBox'
import { Todo } from '../../types'

import styles from './Panel.module.css'

const Panel = ({
    listTodos,
    setNewTodo,
}: {
    listTodos: Todo[]
    setNewTodo: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const openCreateTodoPopup = () => setNewTodo((prevState) => !prevState)

    // const quantityCompletedTodo = listTodos.filter(
    //     (todo) => todo.completed === true,
    // ).length

    return (
        <div className={styles.panel}>
            <Button
                name="Новая задача"
                getEvent={openCreateTodoPopup}
                className={styles.button}
            />
            <p>Задач выполнено: из {listTodos.length}</p>
            <SearchBox />
            <SortBox />
        </div>
    )
}

export default Panel
