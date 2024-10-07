import React, { useState, useEffect } from 'react';


const object = [
    {
        name: '',
        img: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    },
    {
        name: '',
        img: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        name: '',
        img: 'https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp'
    },
    {
        name: '',
        img: 'https://th.bing.com/th/id/OIG4.hb6x6NsHBTvbDGaD13Ua'
    },
    {
        name: '',
        img: 'https://th.bing.com/th/id/OIG3.LF0j5JICj4qbfqQ_Oudn'
    },
    {
        name: '',
        img: 'https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg'
    }
]

const ListRendring = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://dummyjson.com/recipes')
    //         .then(res => res.json())
    //         .then((res) => {
    //             setData(res.recipes)
    //             console.log(setData(res.recipes))
    //         }
    //         );
    // }, [])
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center items-center gap-5 overflow-hidden  '>
                {

                    object.map((current, index) => {
                        return (

                            <Recipes key={index} details={current} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListRendring

function Recipes({ details }) {
    return (
        <div className='h-full border-2 border-black rounded'>

            <div className='flex flex-col gap-4  p-4 overflow-hidden'>
                <div className='w-full h-1/2'>
                    <img src={details.img} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-nowrap'>
                    <p className='text-xl font-bold my-2' id='tittle_'>{details.name}</p>
                   
                </div>
            </div>
        </div>
    )
}
