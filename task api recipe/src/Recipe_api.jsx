import React, { useState, useEffect, useRef } from 'react'


const Recipe_api = () => {

    const [data, setData] = useState([]);
    let fetch_data= useRef([])
    useEffect(
        () => {
            fetch('https://dummyjson.com/recipes').then((res) => res.json()).then((res) => {
                setData(res.recipes);
                fetch_data.current.push(...res.recipes) ;
                console.log(res.recipes)
            })
        }, []
    )
    console.log('fetch_data ', fetch_data);

    return (
        <div className='mx-5 my-4'>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center items-center gap-5 overflow-hidden  '>
                {
                    data.map((current, index) => {
                        return (

                            <Recipes key={index} details={current} />

                        )
                    })
                }

                <button >
                    click
                </button>
            </div>
        </div>
    )
}

export default Recipe_api

function Recipes({ details }) {
    return (
        <>
            <div className='h-full border-2 border-black rounded'>

                <div className='flex flex-col gap-4  p-4 overflow-hidden'>
                    <div className='w-full h-1/2'>
                        <img src={details.image} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex-nowrap'>
                        <p className='text-xl font-bold my-2'>{details.name}</p>
                        <p> {details.ingredients[0]}</p>
                        <p> {details.instructions[3]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}



