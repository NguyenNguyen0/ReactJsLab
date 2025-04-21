import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos, addTodo, toggleTodo, removeTodo } from '../features/todoAPI/todoSlice'

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.items || [])
    const loading = useSelector((state) => state.todos.loading)

    const [newTitle, setNewTitle] = useState('')

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const handleAddTodo = () => {
        if (newTitle.trim()) {
            dispatch(addTodo({ title: newTitle, completed: false }))
            setNewTitle('')
        }
    }

    const handleToggleTodo = (id, completed) => {
        dispatch(toggleTodo({id, completed}))
    }

    const handleDeleteTodo = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-amber-500 mb-6 text-center">Todo List</h2>

                <div className="flex space-x-2 mb-6">
                    <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Add new todo..."
                    />
                    <button
                        onClick={handleAddTodo}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                        Add
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-500"></div>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {todos.length === 0 ? (
                            <li className="text-gray-500 text-center py-4">No todos yet. Add one above!</li>
                        ) : (
                            todos.map((todo) => (
                                <li
                                    key={todo.id}
                                    className={`rounded-lg p-3 flex items-center justify-between transition duration-200 ${todo.completed
                                            ? 'bg-gray-50/80 backdrop-blur-sm'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="flex items-center flex-1">
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => handleToggleTodo(todo.id, !todo.completed)}
                                            className="mr-3 h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                                        />
                                        <div>
                                            <span className={`text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                                                {todo.title}
                                            </span>
                                            {todo.description && (
                                                <p className={`text-sm text-gray-600 mt-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                                                    {todo.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded-lg transition duration-200"
                                        onClick={() => handleDeleteTodo(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default TodoList
