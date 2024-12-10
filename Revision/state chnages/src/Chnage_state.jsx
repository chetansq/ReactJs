import React, { useState } from 'react'
import { AnimalList } from './Data'

const Chnage_state = () => {


    const [index, setIndex] = useState(0)

    const List = [AnimalList[index]];

    const nextState = () => {
        console.log("index", index);
        if (index == 9) {
            setIndex(0)
        } else {

            setIndex(index + 1);
        }
    }

    const prevState = () => {

        if (index == 0) {
            setIndex(0)
        } else {

            setIndex(index - 1);
        }
    }



    return (
        <div className='bg-slate-200 p-10'>
            <div className='flex justify-around gap-8 my-14'>
                <button className='btn' onClick={prevState}>Previous</button>

                <button className='btn' onClick={nextState}>Next</button>
            </div>
            <hr />
            <div className='flex justify-around mt-10'>


                {
                    List.map((item) => {

                        return (

                            <div div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id} >
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
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
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
                        )


                    })
                }
            </div>

        </div >
    )
}

export default Chnage_state
