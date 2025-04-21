import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.cart.find(item => item.id == action.payload.id)) {
        state.cart = state.cart.map(item => {
          return item.id == action.payload.id ? ({...item, quantity: item.quantity + 1}) : item
        })
        return
      }

      state.cart.push({ ...action.payload, quantity: 1 })
    },
    updateQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        return item.id == action.payload.id ? ({...item, quantity: item.quantity + action.payload.quantity}) : item
      })
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, updateQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer