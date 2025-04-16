import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    return (
        <div className='flex flex-col items-center justify-center'>
            <input onChange={(e) => { setTodo(e.target.value) }} className='outline-0 p-3 bg-slate-100 border border-slate-800 rounded-2xl' type="text" value={todo} />

            <button 
                onClick={() => {
                    dispatch(addTodo({ id: todos.length + 1, title: todo, completed: false }))
                    setTodo('')
                }}
                className='bg-green-400 p-3 border border-white  rounded-2xl my-4'
            >
                Add todo
            </button>

            <ul className='border border-gray-400 m-3'>
                <h2 className='text-center uppercase text-3xl font-bold text-amber-500'>TODOS</h2>
                {todos.map(todo => (
                    <li className={`bg-green-300 w-90 my-1 flex justify-between items-center`} key={todo.id}>
                        <span onClick={() => { dispatch(toggleTodo(todo.id)) }} className={`grow-1 p-3 ${todo.completed && 'line-through'}`}>{todo.title}</span>
                        <button onClick={() => { dispatch(removeTodo(todo.id)) }} className='text-white bg-red-500 rounded-2xl p-1 px-2 mr-1'>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
