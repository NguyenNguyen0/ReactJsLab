import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const API_URL = 'https://6805bed3ca467c15be69cb8a.mockapi.io/todos'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch(API_URL)
  const data = await res.json()
  return data
})

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo)
  })
  return await res.json()
})


export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  return id;
})

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (params) => {
  const res = await fetch(`${API_URL}/${params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: params.completed })
  })
  return await res.json()
});

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder // Fetch
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // Add
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })

      // Delete - add this case
      .addCase(removeTodo.fulfilled, (state, action) => {
        // Filter out the deleted todo using its ID
        state.items = state.items.filter(todo => todo.id !== action.payload)
      })

      // Toggle - add this case
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload
        const index = state.items.findIndex(todo => todo.id === updatedTodo.id)
        if (index !== -1) {
          state.items[index] = updatedTodo
        }
      })
  }
})

export default todoSlice.reducer