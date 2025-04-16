import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'

export const themeStore = configureStore({
  reducer: {
    theme: themeReducer
  },
})