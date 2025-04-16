import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='flex flex-col justify-center items-center mx-auto my-5'>
            <h1 className='text-green-600 text-3xl'>COUNTER</h1>
            <h2 className='text-amber-700 text-2xl my-5'>{count}</h2>

            <div>
                <button className='rounded-2xl border border-amber-100 p-3 bg-green-400 text-white uppercase font-bold' onClick={() => dispatch(increment())} >increase</button>
                <button className='rounded-2xl border border-amber-100 p-3 bg-red-400 text-white uppercase font-bold' onClick={() => dispatch(decrement())} >decrease</button>
            </div>
        </div>
    )
}

export default Counter
