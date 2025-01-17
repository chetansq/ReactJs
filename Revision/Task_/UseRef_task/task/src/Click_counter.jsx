import React, { useRef } from 'react'

const Click_counter = () => {
    let ref = useRef(0)

    const counter = () => {
        ref.current = ref.current + 1
        alert('hello ' + ref.current + ' times ')
        console.log('current', ref.current);
    }
    return (
        <div className='flex justify-center items-center h-screen bg-slate-500 gap-4'>

            <button onClick={counter} className='bg-slate-900 text-white py-1 px-2 hover:bg-slate-800'>Click</button>
        </div>
    )
}

export default Click_counter
