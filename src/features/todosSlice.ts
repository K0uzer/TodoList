import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Todo } from '../types'

const initialState: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')

export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                title: action.payload,
                content: action.payload,
                completed: false,
            }
            state.push(newTodo)
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
    },
})

export const {} = todosSlice.actions

export default todosSlice.reducer
