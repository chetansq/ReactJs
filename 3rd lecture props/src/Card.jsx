import React, { useState } from 'react'
import Button from './button'

// const initialValue = 'submit';

// export default function Card({ name }) {
//     const [state, setstate] = useState(initialValue);

//     console.log(state);

//     const handleChange = () => {
//         setstate("hello");
//     }
//     return (

//         <div className="border rounded-md w-[300px]">

//             <Button name={state} />
//             <div className='flex justify-center'>
//                 <button onClick={handleChange} className='bg-black text-white py-2 px-4 rounded-full'>click</button>
//             </div>
//         </div>

//     )
// }



const initialValue = "reset";

function Card() {

    const [data, setData] = useState(initialValue);

    console.log(data);

    const change = () => {
        setData("submit")
    }

    return (
        <div className='border flex justify-around w-1/3' >
            <Button value={data} />
            <button className='bg-black text-white py-2 px-4' onClick={change}>click</button>
        </div>
    )
}

export default Card
