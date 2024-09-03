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
            <p className='bg-red-200 font-bold mb-5'>Count : <span className='font-semibold'>{count}</span></p>
            <button onClick={countIncrease} className='bg-black text-white py-2 px-4 hover:bg-red-500 mr-5'>Increase</button>
            <button onClick={countDecrease} className='bg-black text-white py-2 px-4 hover:bg-red-500'>Decrease</button>
        </div>
    )
}

export default Usestate1
