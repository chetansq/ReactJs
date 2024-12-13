// import React, { useEffect, useState } from 'react'
// import { AnimalList } from './Data'

// const Chnage_state = () => {


//     const [index, setIndex] = useState(0)
//     const [btn, setBtn] = useState('line-clamp-1');
//     const [toggle, setToggle] = useState(false);
//     const [theam, setTheam] = useState(index);
//     const [animate, setAnimate] = useState('');

//     useEffect(() => {
//         // Trigger the animation when the component mounts
//         setAnimate('slide-right');

//         // Optional: Remove the animation class after it finishes
//         const timer = setTimeout(() => {
//             setAnimate('');
//         }, 1000); // Adjust duration to match your CSS animation duration

//         return () => clearTimeout(timer);
//     }, []);

//     const List = [AnimalList[index]];

//     const nextState = () => {
//         console.log("index", index);
//         if (index == 9) {
//             setIndex(0)
//         } else {

//             setIndex(index + 1);
//             setBtn('line-clamp-1');
//         }
//     }

//     const prevState = () => {

//         if (index == 0) {
//             setIndex(0)
//         } else {

//             setIndex(index - 1);
//             setBtn('line-clamp-1');
//         }
//     }

//     const btnToggle = () => {
//         if (toggle) {
//             setBtn('line-clamp-1')
//             setToggle(false);
//         } else {
//             setBtn('line-clamp-*')
//             setToggle(true)
//         }
//     }

//     const changeTheam = (e) => {
//         setTheam(e.target.value);
//         console.log(setTheam(e.target.value));
//     }

//     const changeIndex = () => {
//         if (index == theam) {
//             console.log('not');
//         } else {
//             setIndex(theam)

//         }

//     }




//     return (
//         <div>
//             {
//                 List.map((item) => {
//                     return (

//                         <div className={`bg-slate-200 p-5 slide-right ${animate}`} key={item.id} style={{ backgroundImage: `url('${item.bg_image}')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", height: '100svh', width: "100%" }}>
//                             <div className='flex justify-between gap-8 my-2'>
//                                 <button className='btn' onClick={prevState}>Previous</button>
//                                 <div className='flex gap-3'>
//                                     <input type="text" name="" id="" value={theam} onChange={changeTheam} />
//                                     <button className='btn' onClick={changeIndex}>click</button>
//                                 </div>
//                                 <button className='btn' onClick={nextState}>Next</button>
//                             </div>

//                             <div className='flex justify-left mt-10'>


//                                 {
//                                     List.map((item) => {

//                                         return (

//                                             <div div className="max-w-sm bg-white  rounded-lg shadow dark:bg-transparent  dark:border-gray-700" key={item.id} >
//                                                 <a href="#">
//                                                     <img
//                                                         className="rounded-t-lg h-52 w-full object-cover object-top"
//                                                         src={item.image}
//                                                         alt=""
//                                                     />
//                                                 </a>
//                                                 <div className="p-5">
//                                                     <a href="#">
//                                                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                                                             {item.name}
//                                                         </h5>
//                                                     </a>
//                                                     <div className={`${btn}  mb-3 font-normal text-gray-300 dark:text-gray-300 text-left leading-8 `}>
//                                                         <p>{item.description}</p>
//                                                         <hr className=' border-gray-600 my-3' />
//                                                         <p className='text-white'> Species :
//                                                             <span className='text-gray-300 font-light'> {item.species}</span>
//                                                         </p>
//                                                         <p className='text-white'> Family :
//                                                             <span className='text-gray-300 font-light'> {item.family}</span>
//                                                         </p>
//                                                         <p className='text-white'> Habitat :
//                                                             <span className='text-gray-300 font-light'> {item.habitat}</span>
//                                                         </p>
//                                                         <p className='text-white'> Place Of Found :
//                                                             <span className='text-gray-300 font-light'> {item.place_of_found}</span>
//                                                         </p>
//                                                         <p className='text-white'> Diet :
//                                                             <span className='text-gray-300 font-light'> {item.diet}</span>
//                                                         </p>
//                                                         <p className='text-white'> Weight kg :
//                                                             <span className='text-gray-300 font-light'> {item.weight_kg}</span>
//                                                         </p>
//                                                         <p className='text-white'> Height cm :
//                                                             <span className='text-gray-300 font-light'> {item.height_cm}</span>
//                                                         </p>
//                                                     </div>
//                                                     <a
//                                                         href="#"
//                                                         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                                                         onClick={btnToggle}>
//                                                         Read more
//                                                         <svg
//                                                             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                                                             aria-hidden="true"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             fill="none"
//                                                             viewBox="0 0 14 10"
//                                                         >
//                                                             <path
//                                                                 stroke="currentColor"
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeWidth={2}
//                                                                 d="M1 5h12m0 0L9 1m4 4L9 9"
//                                                             />
//                                                         </svg>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         )


//                                     })
//                                 }
//                             </div>

//                         </div >
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Chnage_state


import React, { useEffect, useState } from 'react';
import { AnimalList } from './Data';
import './index.css'; // Import your CSS file

const Chnage_state = () => {
    const [index, setIndex] = useState(0);
    const [btn, setBtn] = useState('line-clamp-1');
    const [toggle, setToggle] = useState(false);
    const [theam, setTheam] = useState(index);
    const [animate, setAnimate] = useState('');

    useEffect(() => {
        // Trigger the animation when the component mounts
        setAnimate('slide-right');

        // Optional: Remove the animation class after it finishes
        const timer = setTimeout(() => {
            setAnimate('');
        }, 1000); // Adjust duration to match your CSS animation duration

        return () => clearTimeout(timer);
    }, [index]); // Add index to dependencies to trigger on state change

    const List = [AnimalList[index]];

    const nextState = () => {
        if (index === 9) {
            setIndex(0);
        } else {
            setIndex(index + 1);
            setBtn('line-clamp-1');
        }
    };

    const prevState = () => {
        if (index > 0) {
            setIndex(index - 1);
            setBtn('line-clamp-1');
        }
    };

    const btnToggle = () => {
        setToggle(!toggle);
        setBtn(toggle ? 'line-clamp-1' : 'line-clamp-*');
    };

    const changeTheam = (e) => {
        setTheam(e.target.value);
    };

    const changeIndex = () => {
        if (index !== theam) {
            setIndex(theam);
        }
    };

    return (
        <div>
            {List.map((item) => (
                <div
                    className={`bg-slate-200 p-5 ${animate}`}
                    key={item.id}
                    style={{
                        backgroundImage: `url('${item.bg_image}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100svh',
                        width: '100%',
                    }}
                >
                    <div className='flex justify-between gap-8 my-2'>
                        <button className='btn' onClick={prevState}>Previous</button>
                        <div className='flex gap-3'>
                            <input type="text" value={theam} onChange={changeTheam} />
                            <button className='btn' onClick={changeIndex}>click</button>
                        </div>
                        <button className='btn' onClick={nextState}>Next</button>
                    </div>

                    <div className='flex justify-left mt-10'>
                        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-transparent dark:border-gray-700" key={item.id}>
                            <a href="#">
                                <img
                                    className="rounded-t-lg h-52 w-full object-cover object-top"
                                    src={item.image}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.name}
                                    </h5>
                                </a>
                                <div className={`${btn} mb-3 font-normal text-gray-300 dark:text-gray-300 text-left leading-8`}>
                                    <p>{item.description}</p>
                                    <hr className='border-gray-600 my-3' />
                                    <p className='text-white'> Species :
                                        <span className='text-gray-300 font-light'> {item.species}</span>
                                    </p>
                                    <p className='text-white'> Family :
                                        <span className='text-gray-300 font-light '> {item.family}</span>
                                    </p>
                                    <p className='text-white'> Habitat :
                                        <span className='text-gray-300 font-light'> {item.habitat}</span>
                                    </p>
                                    <p className='text-white'> Place Of Found :
                                        <span className='text-gray-300 font-light'> {item.place_of_found}</span>
                                    </p>
                                    <p className='text-white'> Diet :
                                        <span className='text-gray-300 font-light'> {item.diet}</span>
                                    </p>
                                    <p className='text-white'> Weight kg :
                                        <span className='text-gray-300 font-light'> {item.weight_kg}</span>
                                    </p>
                                    <p className='text-white'> Height cm :
                                        <span className='text-gray-300 font-light'> {item.height_cm}</span>
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={btnToggle}>
                                    Read more
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

 export default Chnage_state