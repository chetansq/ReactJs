import React, { useRef } from 'react'

const Focus = () => {

    const ref = useRef(null)

    const focus_input = () => {
        ref.current.focus()
    }
    return (
        <div className='flex justify-center items-center h-screen bg-slate-500 gap-4'>

            <input type="text" ref={ref} className='px-2 py-1' />

            <button onClick={focus_input} className='bg-slate-900 text-white py-1 px-2 hover:bg-slate-800'> Focus on input</button>
        </div>
    )
}

export default Focus