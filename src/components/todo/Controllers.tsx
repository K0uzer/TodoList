import Button from '../../UI/Button'
import { Todo } from '../../types'

import styles from './Controllers.module.css'

const ContainerControllers = ({
    todoItem,
    editOpen,
    editTodo,
    removeTodo,
    toggleStateTodo,
}: {
    todoItem: Todo
    editOpen: boolean
    editTodo: () => void
    removeTodo: () => void
    toggleStateTodo: () => void
}) => {
    return (
        <div className={styles.containerControllers}>
            <div>
                <span>Состояние задачи:</span>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="compile"
                    alt="Состояние задачи"
                    checked={todoItem.completed}
                    onChange={toggleStateTodo}
                />
            </div>
            <Button
                className={styles.button}
                name="Удалить"
                getEvent={removeTodo}
            />
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
        </div>
    )
}

export default ContainerControllers
