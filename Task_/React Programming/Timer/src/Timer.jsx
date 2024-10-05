import React, { useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(0);

    function start() {
        setInterval(() => {

            setTime(time => time + 1);
        }, 1000);
    }

    function stop() {

        clearInterval();

        // interval_id = 0;
    }


    return (
        <div className='container'>

            <p className='text-4xl p-2 bg-slate-400 rounded'>TIMER</p>
            <div>
                <p className='text-xl m-3'> {time}s </p>
            </div>
            <div className='*:bg-slate-700 *:text-white *:m-4 *:p-2 *:rounded '>
                <button className='hover:bg-slate-400 hover:text-black border hover:border-black' onClick={start}>START</button>
                <button className='hover:bg-slate-400 hover:text-black border hover:border-black' onClick={stop}>STOP</button>
                <button className='hover:bg-slate-400 hover:text-black border hover:border-black'>RESET</button>
            </div>
        </div>
    )
}

export default Timer
