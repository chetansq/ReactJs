import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [count, setCount] = useState(0);

    const num = useRef(0);
    num.current = num.current + 1;
    console.log("number ", num)

    // let num = 0;
    // num = num + 1;
    // console.log("number ", num);
    return (
        <div className='flex flex-col gap-6 justify-center items-center h-screen bg-slate-600'>

            <p className='bg-slate-300 px-5'>{count}</p>
            <button onClick={() => setCount(count + 1)} className='bg-slate-400 p-2 rounded'>click</button>
        </div>
    )
}

export default UseRef
