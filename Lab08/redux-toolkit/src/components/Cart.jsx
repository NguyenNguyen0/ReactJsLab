import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, updateQuantity, removeItem } from '../features/cart/cartSlice'

function Cart() {
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  const [items, _] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
    { id: 4, name: 'Item 4', price: 40 },
    { id: 5, name: 'Item 5', price: 50 },
    { id: 6, name: 'Item 6', price: 60 },
    { id: 7, name: 'Item 7', price: 70 },
    { id: 8, name: 'Item 8', price: 80 },
    { id: 9, name: 'Item 9', price: 90 },
    { id: 10, name: 'Item 10', price: 100 }
  ]); 
  return (
    <div>
      <h1 className='text-4xl text-center text-amber-700'>Cart</h1>
      <ul className='grid grid-cols-3 gap-4 border border-gray-300 p-4 my-10'>  
        {cart.map(item => (
          <li className='flex items-center gap-2 justify-center hover:bg-amber-200 p-6' key={item.id}>
            {item.name} - ${item.price}
            <button className='p-2 border border-slate-400' onClick={() => dispatch(updateQuantity({ id: item.id, quantity: -1 }))}>-</button>
            {item.quantity}
            <button className='p-2 border border-slate-400' onClick={() => dispatch(updateQuantity({ id: item.id, quantity: 1 }))}>+</button>
            <button className='bg-red-500 text-white' onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </li>
        ))}
      </ul>

      <h1 className='text-4xl text-center text-amber-700'>Item</h1>
      <ul className='grid grid-cols-3 gap-4 border border-gray-300 p-4 my-10'>  
        {items.map(item => (
          <li onClick={() => dispatch(addItem(item))} className='flex items-center justify-center hover:bg-amber-200 p-6 select-none' key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
