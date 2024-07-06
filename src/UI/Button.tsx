import React, { ReactNode } from 'react'

type ButtonProps = {
    name: string
    getEvent: () => void
}

const Button = ({ name, getEvent }: ButtonProps) => {
    return <button onClick={getEvent}>{name}</button>
}

export default Button
