import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoState {
    title: string
    value: string
}

const initialState: TodoState = {
    title: '',
    value: '',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        create: (state) => {},
        delete: (state) => {},
        done: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { create } = todoSlice.actions

export default todoSlice.reducer
