import React, { useEffect, useState } from 'react'

const Counter = () => {

  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  const [bgcolor, setBgColor] = useState('');
  // const [resetcolor, setResetColor] = useState('');


  useEffect(() => {
    if (run && time > 0) {
      setBgColor('bg-slate-700')
      let id = setInterval(() => {
        setTime(prev => prev - 1)
      }, 1000);
      return () => clearInterval(id)
    }
    else if (time == 0) {
      setRun(false)

    }
    else {
      setRun(false)
      setBgColor('bg-slate-500')
    }
    // setRun(true)


  }, [time, run])


  return (
    <div className={`${bgcolor} flex flex-col gap-6 justify-center items-center h-screen`}>
      <div>

        <input type="number" name="" id="" placeholder='Seconds' onChange={(e) => setTime(parseInt(e.target.value))} className='border-2 p-2' />
      </div>
      <div>

        <button className='btn1' onClick={() => setRun(true)}>Start</button>
        <button className='btn1' onClick={() => setRun(false)}>Stop</button>
        <button className='btn1' onClick={() => setTime(0)}>Reset</button>
      </div>

      <h1 className='bg-slate-300 py-2 px-5'>{time ?  <p><span className='bg-red-900 p-1 text-white'>{`${time}`}</span> remainig</p> : 'Time-Up'}</h1>
    </div>
  )
}

export default Counter
