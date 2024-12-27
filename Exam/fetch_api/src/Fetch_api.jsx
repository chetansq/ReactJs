import React, { useState } from 'react'
import { useEffect } from 'react'

import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Fetch_api = () => {
    const [Data, setData] = useState([])
    console.log(Data);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then(res => setData(res.posts))
    }, [])


    return (

        <div>
            <div className='my-4'>
                <p className='bg-black text-white text-2xl p-3'>Fetch Data</p>
            </div>
            <div className='grid grid-cols-3 gap-4 '>

                {
                    Data.map((item) => {
                        return (
                            <div key={item.id} className='group/card '>
                                <div  className='group/card  group-hover/card:dark:bg-black p-2 flex  flex-col  gap-6 bg-slate-100 border border-black shadow-xl'>

                                    <div className='p-2 flex  flex-col items-center justify-center gap-6'>
                                        <p className='text-2xl line-clamp-1 text-justify text-slate-700 group-hover/card:dark:text-white group-hover/card:dark:bg-transparent group-hover/card:dark:shadow-white group-hover/card:dark:shadow-sm font-semibold  bg-slate-200 p-2 '>

                                            {item.title}
                                        </p>

                                        <p className='line-clamp-4 text-justify text-gray-800 group-hover/card:dark:text-white '>
                                            {item.body}
                                        </p>
                                    </div>
                                    <div className='flex gap-2 font-semibold group-hover/card:dark:text-white'>
                                        Tags :
                                        <div className='flex gap-2 text-blue-800 group-hover/card:dark:text-blue-300'>
                                            <p>
                                                {item.tags[0]}
                                            </p>
                                            |
                                            <p>
                                                {item.tags[1]}
                                            </p>
                                            |
                                            <p>
                                                {item.tags[2]}
                                            </p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <p className='flex items-center gap-1'>
                                                <BiLike className='text-blue-800 group-hover/card:dark:text-blue-300 ' />
                                                <samp className='group-hover/card:dark:text-white'>
                                                    {item.reactions.likes}
                                                </samp>
                                            </p>
                                            |
                                            <p className='flex items-center gap-1'>
                                                <BiDislike className='text-slate-700' />
                                                <span className='group-hover/card:dark:text-white'>
                                                    {item.reactions.dislikes}
                                                </span>

                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-2'>
                                        <p>
                                            <span className='font-semibold group-hover/card:dark:text-white'> Views :</span>
                                            <samp className='px-2 group-hover/card:dark:text-white'>
                                                {item.views}
                                            </samp>
                                        </p>
                                        <p>
                                            <span className='font-semibold group-hover/card:dark:text-white'>UserId :</span>
                                            <span className='px-2 group-hover/card:dark:text-white'>
                                                {item.userId}
                                            </span>
                                        </p>
                                    </div>
                                </div>


                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Fetch_api
