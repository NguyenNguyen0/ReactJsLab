import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [
    {id: 1, name: 'laptop', quantity: 0}
  ],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload)
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