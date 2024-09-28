import React from 'react'
import { useState } from 'react'


const Usestate2 = () => {

    const [count, setcount] = useState(0)

    const countIncrease = () => {
        setTimeout(() => setcount(count + 1), 2000);
    }


    const countDecrease = () => {
        setTimeout(() => setcount(count - 1), 2000);
    }

    return (
        <div>
            <p className='bg-red-200 font-bold mb-5'>Count : <span className='font-semibold'>{count}</span></p>
            <button onClick={countIncrease} className='bg-black text-white py-2 px-4 hover:bg-red-500 mr-5'>Increase</button>
            <button onClick={countDecrease} className='bg-black text-white py-2 px-4 hover:bg-red-500'>Decrease</button>
        </div>
    )
}

export default Usestate2
