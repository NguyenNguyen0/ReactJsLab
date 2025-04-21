import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../features/todoAPI/todoSlice'

export const todoAPIStore = configureStore({
  reducer: {
    todos: todoSlice
  },
})