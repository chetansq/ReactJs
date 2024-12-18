import React, { useState } from 'react'
import { useEffect } from 'react'
import 'axios'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// https://dummyapi.online/api/blogposts



const Blog = () => {

    const [Data, setData] = useState([])

    useEffect(() => {

        axios.get('https://dummyapi.online/api/blogposts').then(res => {
            setData(res.data)
            console.log(res.data)
        }
        ).catch((error) => error);
    }, [])

    return (
        <div className=' mt-10'>
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
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                                    {details.title}
                                </h5>
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


            <Stack spacing={10}>
                <Pagination count={50} variant="outlined" shape="rounded" color='primary' />
            </Stack>
        </div>
    )
}

export default Blog
