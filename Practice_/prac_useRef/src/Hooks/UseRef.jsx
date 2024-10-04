import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

const UseRef = () => {

    const [time, setTime] = useState(0);

    const timeRef = useRef(null);

    function startTimer() {
        timeRef.current = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
        // console.log(timeRef.current);

    }

    function stopTimer() {
        clearTimeout(timeRef.current);
        timeRef.current = null;
    }

    function resetTimer() {
        // console.log(timeRef.current);
        stopTimer()
        setTime(0);
    }

    // useEffect(
    //     () => {
    //         let a = setTimeout(() => {
    //             setTime(time + 1);

    //             console.log("hello");
    //         }, 1000)

    //         return () => {
    //             clearTimeout(a);
    //         }
    //     }
    // )

    return (
        <div className='flex flex-col gap-6 justify-center items-center h-screen bg-slate-600'>
            <p className='text-5xl bg-gray-300 p-4 rounded'>
                STOPWATCH
            </p>
            <div className='bg-slate-400 p-2 text-xl px-8 rounded'>
                {time}s
            </div>
            <div className='*:text-xl *:text-white *:p-2 *:rounded rounded p-4 bg-slate-200 flex gap-7 *:bg-slate-800'>
                <button className='hover:bg-slate-400 hover:text-slate-900' onClick={startTimer}>START</button>
                <button className='hover:bg-slate-400 hover:text-slate-900' onClick={stopTimer}>STOP</button>
                <button className='hover:bg-slate-400 hover:text-slate-900' onClick={resetTimer}>RESET</button>
            </div>
        </div>
    )
}

export default UseRef
