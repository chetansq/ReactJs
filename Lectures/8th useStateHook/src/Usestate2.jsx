import React from 'react'
import { useState } from 'react'

const Usestate2 = () => {
    const [count, setcount] = useState(0);

    const countIncrease = () => {
        // setTimeout(setcount(count + 1), 2000); // is not valid
        return setTimeout(() => setcount(count + 1), 2000); // is  valid , use  always callback function in setTimeOut function

    }

    const countDecrease = () => {
        return setTimeout(() => setcount(count - 1), 2000);
    }

    return (
        <div>
            <p className='bg-red-200 text-black py-2 px-4 mb-5 font-bold' >Count : <span className='font-medium'> {count}</span></p>
            <button onClick={countIncrease} className='bg-black text-white py-2 px-4 hover:bg-red-500 mr-5'>Increment</button>
            <button onClick={countDecrease} className='bg-black text-white py-2 px-4 hover:bg-red-500'>Decrement</button>
        </div>
    )
}

export default Usestate2