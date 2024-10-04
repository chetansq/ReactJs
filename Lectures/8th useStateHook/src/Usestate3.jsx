import React from 'react'
import { useState } from 'react'



const Usestate3 = () => {

    const [count, setcount] = useState(0)

    const countIncrease = () => {
        setTimeout(() => setcount(state => state + 1), 2000);
    }

    const countDecrease = () => {
        if (count > 0) {
            return setTimeout(() => setcount(state => state - 1), 2000);
        }
        else {
            return setcount(count);
        }
    }

    return (
        <div>
            <p className='bg-red-200 text-black py-2 px-4 mb-5 font-bold' >Count : <span className='font-medium'> {count}</span></p>
            <button onClick={countIncrease} className='bg-black text-white py-2 px-4 hover:bg-red-500 mr-5'>Increment</button>
            <button onClick={countDecrease} className='bg-black text-white py-2 px-4 hover:bg-red-500'>Decrement</button>
        </div>
    )
}

export default Usestate3