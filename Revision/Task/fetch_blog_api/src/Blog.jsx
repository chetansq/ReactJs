import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


// https://dummyapi.online/api/blogposts



const Blog = () => {

    const [Data, setData] = useState([])
    const [index, setIndex] = useState(0)


    useEffect(() => {

        axios.get('https://dummyapi.online/api/blogposts')
            .then(res => {
                setData(res.data)
            }
            ).catch((error) => error);
    }, [])

    const List = [Data[index]];
    // Data[index]

    console.log('data index of', Data[index]);


    const nextState = () => {
        if (index == 49) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
            console.log('index + 1', index);

        }
    }
    const prevState = () => {
        if (index == 0) {
            setIndex(0)
        }
        else {
            setIndex(index - 1)
            console.log(index);

        }
    }


    return (
        <div className=' mt-10'>

            <div className='flex justify-between gap-8 my-2'>
                <button className='btn' onClick={prevState}>Previous</button>
                <button className='btn' onClick={nextState}>Next</button>
            </div>
            <div className='flex flex-col items-center justify-center  gap-7' >

                {
                    Data.map((details) => {
                        return (

                            <div key={details.id} className='flex justify-center border max-w-sm bg-white rounded-lg shadow '>

                                {/* <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src={details.image}
                                alt=""
                            /> */}
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <p className='bg-black text-white w-fit p-2 border-e-4 border-b-4 border-slate-400 shadow'>{details.id}</p>

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                                        {details.title}
                                    </h5>
                                    <hr className='my-2' />
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {details.content
                                        }
                                    </p>

                                    <div className='flex justify-between'>
                                        <p className='flex flex-col text-left'>Author
                                            <span className='text-slate-700'>
                                                {details.author}
                                            </span>
                                        </p>
                                        <p className='flex flex-col text-right'> Date
                                            <span className='text-slate-700'>
                                                {details.date_published}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default Blog

