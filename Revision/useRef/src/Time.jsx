import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Time = () => {

    const [count, setCount] = useState(0)
    const [run, setRun] = useState(false)

    const time = useRef()

    useEffect(() => {
        if (run) {
            time.current = setInterval(() => {
                setCount((count) => count + 1)
            }, 1000)
        } else {
            clearInterval(time.current)

        }

    }, [run])

    const start = () => {
        setRun(true)
    }

    const stop = () => {
        setRun(false)
    }

    const reset = () => {
        setRun(false)
        setCount(0)
    }

    console.log('count', count)

    return (
        <div className='flex flex-col h-screen justify-center items-center  bg-purple-200'>
            <div className='text-center border border-gray-700 p-4 flex flex-col gap-4'>

                <p className='bg-pink-300 text-black'>  {count} </p>
                <div className='flex gap-4'>

                    <button onClick={start} className='bg-purple-600 text-white py-1 px-4 rounded'>Start</button>
                    <button onClick={stop} className='bg-purple-600 text-white py-1 px-4 rounded'>Stop</button>
                    <button onClick={reset} className='bg-purple-600 text-white py-1 px-4 rounded'>Reset</button>
                </div>
            </div>

        </div>
    )
}

export default Time
