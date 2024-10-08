import React, { useState } from 'react'

const CounterWithPrevious = () => {
    const [count, setCount] = useState(1)
    return (

        <div className=' flex flex-col justify-center items-center '>
            <p className="font-semibold text-3xl ">Counter with previous state : </p>
            <div className='flex *:py-2 *:px-4 bg-slate-200  items-center  my-4 w-32 justify-center  '>
                <p className='hover:text-[red] text-3xl cursor-pointer ' onClick={() => {
                    if (count > 1)
                        setCount(count - 1)
                }} >  &#8722; </p>
                <p className='text-xl'>{count}</p>
                <p className='hover:text-[red] text-3xl cursor-pointer ' onClick={() => setCount(count + 1)}> &#43; </p>
            </div>
        </div>

    )
}

export default CounterWithPrevious
