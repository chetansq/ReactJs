import React, { useState } from 'react'
import Button from './button'
import image1 from './assets/react.svg';

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



// const initialValue = "reset";

// function Card() {

//     const [data, setData] = useState(initialValue);

//     console.log(data);

//     const change = () => {
//         setData("submit")
//     }

//     return (
//         <div className='border flex justify-around w-1/3' >
//             <Button value={data} />
//             <button className='bg-black text-white py-2 px-4' onClick={change}>click</button>
//         </div>
//     )
// }

// const initial = 'hide';
// const initial1 = 'add cart';
// function Card() {
//     const [data, setdata] = useState(initial);
//     const [data1, setdata1] = useState(initial1);

//     const setValue = () => {
//         setdata("show");
//     }

//     const setValue1 = () => {
//         setdata1("buy");
//     }

//     return (
//         <div>
//             <Button data={data} />
//             <Button data={data1} />
//             <button onClick={setValue}>click</button>
//             <br />
//             <button onClick={setValue1}>click 1</button>

//         </div>
//     )
// }

const initial = 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg';


function Card() {
    const [data, setdata] = useState(initial);


    const img = 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp';



    const setValue = () => {

        setdata(img);
    }



    return (
        <div>

            <Button data={data} />
            <button onClick={setValue} className='bg-dark py-2 px-4 text-light'>click</button>



        </div>
    )
}
export default Card
