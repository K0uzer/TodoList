import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
    },
})

// Типизация хранилища и диспатчера
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
