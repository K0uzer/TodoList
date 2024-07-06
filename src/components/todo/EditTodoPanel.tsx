import React from 'react'

import { Todo } from '../../types'

import styles from './EditTodoPanel.module.css'

const editTodoPanel = ({
    title,
    content,
    setTodoItem,
}: {
    title: string
    content: string
    setTodoItem: React.Dispatch<React.SetStateAction<Todo>>
}) => {
    return (
        <>
            <input
                className={styles.title}
                type="text"
                value={title}
                onChange={(event) =>
                    setTodoItem((prevState) => ({
                        ...prevState,
                        title: event.target.value,
                    }))
                }
            />
            <textarea
                className={styles.content}
                value={content}
                onChange={(event) =>
                    setTodoItem((prevState) => ({
                        ...prevState,
                        content: event.target.value,
                    }))
                }
            />
        </>
    )
}

export default editTodoPanel
