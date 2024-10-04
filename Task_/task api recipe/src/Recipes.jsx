import React, { useState } from 'react'

const Recipes = () => {

    const [data, setData] = useState([]);

    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then((res) => {
            setData(res.recipes);
        })


    return (
        <div>
            {
                data.map((current, index) => {
                    return (

                        <Recipes_details key={index} details={current} />

                    )
                })
            }
        </div>
    )
}

export default Recipes

function Recipes_details({ details }) {
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
               {/* <p> {details.name} </p> */}

            </div>
        </>
    )
}