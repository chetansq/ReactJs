import React from 'react'
import { useState } from 'react'

const Usestate3 = () => {

    const [count, setcount] = useState(0)

    const countIncrease = () => {
        setTimeout(() => setcount(state => state + 1), 2000);
    }


    const countDecrease = () => {

        count > 0 ? setTimeout(() => setcount(state => state - 1), 2000) : setcount(count);
    }

    return (
        <div>
            <p className='bg-red-200 font-bold mb-5'>Count : <span className='font-semibold'>{count}</span></p>
            <button onClick={countIncrease} className='bg-black text-white py-2 px-4 hover:bg-red-500 mr-5'>Increase</button>
            <button onClick={countDecrease} className='bg-black text-white py-2 px-4 hover:bg-red-500 '>Increase</button>

        </div>
    )
}

export default Usestate3
