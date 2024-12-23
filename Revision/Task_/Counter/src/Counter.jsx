// import React, { useEffect, useState } from 'react'

// const Counter = () => {

//   const [time, setTime] = useState(0);
//   const [run, setRun] = useState(false);
//   const [bgcolor, setBgColor] = useState('');
//   // const [resetcolor, setResetColor] = useState('');


//   useEffect(() => {
//     if (run && time > 0) {
//       setBgColor('bg-slate-700')
//       let id = setInterval(() => {
//         setTime(prev => prev - 1)
//       }, 1000);
//       return () => clearInterval(id)
//     }
//     else if (time == 0) {
//       setRun(false)
//       setBgColor('bg-white')

//     }

//     // setRun(true)


//   }, [time, run])


//   return (
//     <div className={`${bgcolor} flex flex-col gap-6 justify-center items-center h-screen`}>
//       <div>

//         <input type="number" name="" id="" placeholder='Seconds' onChange={(e) => setTime(parseInt(e.target.value))} className='border-2 p-2' />
//       </div>
//       <div>

//         <button className='btn1' onClick={() => setRun(true)}>Start</button>
//         <button className='btn1' onClick={() => setRun(false)}>Stop</button>
//         <button className='btn1' onClick={() => setTime(0)}>Reset</button>
//       </div>

//       <h1 className='bg-slate-300 py-2 px-5'>{time ? <p><span className='bg-red-900 p-1 text-white'>{`${time}`}</span> remainig</p> : 'Time-Up'}</h1>
//     </div>
//   )
// }

// export default Counter







import React, { useEffect, useState } from 'react'

const Counter = () => {

  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  const [bgcolor, setBgColor] = useState('');

  useEffect(() => {
    if (run && time > 0) {
      setBgColor('bg-black')
      let id = setInterval(() => {
        setTime(prev => prev - 1)

      }, 1000);
      return () => clearInterval(id)
    }
    else if (time == 0) {
      setRun(false)
      setBgColor('bg-white')

    } else if (time == time) {
      setRun(false)
      setBgColor('bg-slate-700')
    }

    // setRun(true)

  }, [time, run])

  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  // console.log('minute : ', minutes, 'seconds : ', seconds);


  return (
    <div className={`${bgcolor} flex flex-col gap-6 justify-center items-center h-screen`}>

      <div>
        <input type="number" name="" id="" placeholder='Seconds' value={time} onChange={(e) => setTime(parseInt(e.target.value))} className='border-2 p-2' />
      </div>
      <div>
        <button className='btn1' onClick={() => setRun(true)}>Start</button>
        <button className='btn1' onClick={() => setRun(false)}>Stop</button>
        <button className='btn1' onClick={() => setTime(0)}>Reset</button>
      </div>

      <h1 className='bg-slate-300 py-2 px-5'>{time ? <p><span className='bg-red-900 p-4 text-white'>{` ${hours} h : ${minutes} m : ${seconds} s`}</span> remainig</p> : 'Time-Up'}</h1>
    
    </div>
  )
}

export default Counter

