import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/theme/themeSlice'

function Theme() {
    const theme = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()

  return (
    <div className={`w-full h-200 flex flex-col items-center justify-center ${theme == 'dark' && 'bg-gray-800'}`}>
      <h1 className={`text-4xl my-5 uppercase ${theme == 'dark' && 'text-white'}`}>{theme}</h1>
      <button onClick={() => dispatch(toggleTheme())} className={`text-2xl p-3 rounded-2xl border border-gray-600 ${theme == 'dark' ? 'text-blue-800 bg-gray-100' : 'bg-blue-800 text-gray-100'}`}>Toggle theme</button>
    </div>
  )
}

export default Theme
