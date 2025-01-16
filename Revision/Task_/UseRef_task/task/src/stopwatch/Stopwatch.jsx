import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {

    const [time, SetTime] = useState()
    const [watch, setWatch] = useState(false)

    const start_ = useRef()

    useEffect(() => {
        if (watch && time > 0) {
            start_.current = setInterval(() => {
                SetTime(time => time - 1)

            }, 1000);

            return () => clearInterval(start_.current)

        } else if (time == 0) {
            setWatch(false)
        }
        else if (time == time) {
            setWatch(false)
        }
        else {
            clearInterval(start_.current)
        }

    }, [watch])

    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return (
        <div className='flex flex-col gap-6 justify-center items-center h-screen bg-slate-400'>
            <div>
                <input type="number" name="" id="" placeholder='Enter Seconds' value={time} onChange={(e) => SetTime(parseInt(e.target.value))} className='border-2 p-2' />
            </div>

            <div>
                <h1 className='bg-slate-300 py-2 px-5'>{time ? <p><span className='bg-red-900 p-4 text-white'>{` ${hours} h : ${minutes} m : ${seconds} s`}</span> remainig</p> : 'Time-Up'}</h1>
            </div>

            <div className='*:bg-slate-700 flex gap-5 *:py-1 *:px-4 *:text-white *:border '>
                <button className='hover:border-slate-700 hover:bg-slate-200 hover:text-slate-900' onClick={() => setWatch(true)}>Start</button>
                <button className='hover:border-slate-700 hover:bg-slate-200 hover:text-slate-900' onClick={() => setWatch(false)}>Stop</button>
                <button className='hover:border-slate-700 hover:bg-slate-200 hover:text-slate-900' onClick={() => { SetTime(0); setWatch(false) }} >Reset</button>
            </div>

        </div>
    )
}

export default Stopwatch