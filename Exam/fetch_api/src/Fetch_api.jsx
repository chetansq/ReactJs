import React, { useState } from 'react'
import { useEffect } from 'react'

const Fetch_api = () => {
    const [Data, setData] = useState([])
    console.log(Data);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then(res => setData(res.posts))
    }, [])


    return (

        <div >
            <div className='my-4'>
                <p className='bg-black text-white text-2xl p-3'>Fetch Data</p>
            </div>
            <div className='grid grid-cols-3 gap-4 '>

                {
                    Data.map((item) => {
                        return (
                            <div key={item.id} className='p-2 flex  flex-col items-center justify-center gap-6 bg-slate-300 border-2 border-black '>
                                <p className='text-xl'>

                                    {item.title}
                                </p>
                                <p>
                                    {item.body}
                                </p>
                                <div className='flex gap-4'>
                                    <p>
                                        {item.tags[0]}
                                    </p>
                                    <p>
                                        {item.tags[1]}
                                    </p>
                                    <p>
                                        {item.tags[2]}
                                    </p>

                                </div>
                                <div className='flex gap-4'>
                                    <p>

                                        {item.reactions.likes}
                                    </p>
                                    <p>
                                        {item.reactions.dislikes}

                                    </p>
                                </div>

                                <p>
                                    {item.viewa}
                                </p>
                                <p>
                                    {item.userId}
                                </p>

                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Fetch_api
