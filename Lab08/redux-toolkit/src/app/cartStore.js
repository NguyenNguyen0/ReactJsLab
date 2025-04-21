import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'

export const cartStore = configureStore({
  reducer: {
    cart: cartSlice
  },
})