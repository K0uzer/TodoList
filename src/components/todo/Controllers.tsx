import React from 'react'

import Button from '../../UI/Button'

import styles from './Controllers.module.css'

const ContainerControllers = ({
    setIsTodoOpen,
    editOpen,
    editTodo,
    removeTodo,
}: {
    setIsTodoOpen: React.Dispatch<React.SetStateAction<boolean>>
    editOpen: boolean
    editTodo: () => void
    removeTodo: () => void
}) => {
    const closeTodo = () => setIsTodoOpen((prevState) => !prevState)

    return (
        <div className={styles.containerControllers}>
            {editOpen ? (
                <Button
                    className={styles.button}
                    name="Сохранить"
                    getEvent={editTodo}
                />
            ) : (
                <Button
                    className={styles.button}
                    name="Редактировать"
                    getEvent={editTodo}
                />
            )}
            <Button
                className={styles.button}
                name="Закрыть"
                getEvent={closeTodo}
            />
            <Button
                className={styles.button}
                name="Удалить"
                getEvent={removeTodo}
            />
        </div>
    )
}

export default ContainerControllers
