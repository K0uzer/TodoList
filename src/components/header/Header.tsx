import React from 'react'
import Button from '../../UI/Button'

const header = () => {
    const createTodo = () => {
        console.log(1)
    }

    return (
        <header>
            <Button name="Создать заметку" getEvent={createTodo} />
        </header>
    )
}

export default header
