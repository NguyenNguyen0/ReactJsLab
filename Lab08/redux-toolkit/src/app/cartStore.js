import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/todo/cartSlice'

export const cartStore = configureStore({
  reducer: {
    cart: cartSlice
  },
})