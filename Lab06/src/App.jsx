import { useState, useReducer, useEffect, memo, useRef } from 'react'

function Todo({userId, title, completed}) {
  return (
    <li>
        <h2>User: {userId}</h2>
        <p>{title}</p>
        <p>{completed}</p>
    </li>
  )
}

const MemorizeTodo = memo(Todo, (prevProps, nextProps) => String(prevProps) === String(nextProps));

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case '+':
        return {...state, count: state.count + 1};
      case '-':
        return {...state, count: state.count - 1};
      default:
        console.error(state, action);
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setTodos(json))
      .catch(err => console.log(err));
  }, [])

  const handleIncrease = () => dispatch({type: '+'});
  const handleDecrease = () => dispatch({type: '-'});
  const handleShowName = (e) => {
    nameRef.current.innerText = inputRef.current.value;
  };

  const inputRef = useRef(null);
  const nameRef = useRef("");

  return (
    <>
      <div className='flex justify-center flex-col items-center p-8'>
        <h1 className='text-2xl text-yellow-600 font-bold'>useReducer Hook</h1>
        <span className='text-yellow-500 text-5xl my-3'>{state.count}</span>
        <button className='p-2 min-w-10 bg-green-400 border border-amber-200 rounded-2xl text-purple-400' onClick={handleIncrease}>Increase</button>
        <button className='p-2 min-w-10 bg-green-400 border border-amber-200 rounded-2xl text-purple-400' onClick={handleDecrease}>Decrease</button>
      </div>
      

      <div className='flex justify-center flex-col items-center p-8'>
        <h1 className='text-2xl text-yellow-600 font-bold'>useRef Hook</h1>
        <span className='text-2xl text-amber-800' ref={nameRef}></span>
        <input className='border border-amber-50 bg-gray-300 rounded-2xl py-2 px-3 m-3' type="text" ref={inputRef} />
        <button className='border rounded-2xl bg-amber-300 text-lime-700 p-2' onClick={handleShowName}>Show name</button>
      </div>

      <br />
      <ul>
        {todos.map((todo, index) => <MemorizeTodo key={index} {...todo} />)}
      </ul>
    </>
  )
}

export default App
