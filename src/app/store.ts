import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
