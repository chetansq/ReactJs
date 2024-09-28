import React from 'react'
import { useState } from 'react'

const Usestate1 = () => {
    const [count, setcount] = useState(0);

    const countIncrease = () => {
        setcount(count + 1);
    }

    const countDecrease = () => {
        setcount(count - 1);
    }
    return (
        <div>
            <p className='bg-red-200 text-black py-2 px-4 mb-5 font-bold' >Count : <span className='font-medium'> {count}</span></p>
            <button onClick={countIncrease} className='bg-black text-white py-2 px-4 hover:bg-red-500 mr-5'>Increment</button>
            <button onClick={countDecrease} className='bg-black text-white py-2 px-4 hover:bg-red-500'>Decrement</button>
        </div>
    )
}

export default Usestate1