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
            {/* import React from 'react'
            import {ArrowUpRight} from 'lucide-react' */}



            <div className="w-[300px] rounded-md border">
                <Button data={data} />
                {/* <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                /> */}

                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        About Macbook &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Macbook
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Apple
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Laptop
                        </span>
                    </div>
                    {/* <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button> */}
                    <button onClick={setValue} className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Show about </button>
                </div>
            </div>

        </div>
    )
}
export default Card



// const addValue = 'process';
// function Card() {
//     const [data, setValue] = useState(addValue);

//     const changeValue = () => {
//         setValue("Complete");
//     }

//     return (
//         <>
//             <Button data={data} />
//             <button onClick={changeValue} className='bg-black text-white text-2xl py-2 px-4'>click</button>
//         </>
//     )
// }

// export default Card


