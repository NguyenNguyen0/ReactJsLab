import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {id: 1, title: 'learn redux', completed: true}
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        return todo.id == action.payload ? ({...todo, completed: !todo.completed}) : todo
      })
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer