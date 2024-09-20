import React, { useState } from 'react'


const Recipe_api = () => {

    const [data, setData] = useState([]);

    const fetch_data = () => {
        fetch('https://dummyjson.com/recipes')
            .then((res) => res.json())
            .then((res) => {
                setData(res.recipes);

            });

    }


    return (
        <div>
            {
                data.map((current, index) => {
                    return (

                        <Recipes keys={index} details={current} />
                    )
                })
            }
            {/* <div>
                {res.json}
            </div> */}

            <button onClick={fetch_data}>
                click
            </button>
        </div>
    )
}

export default Recipe_api

function Recipes({ details }) {
    return (
        <>
            <div className='w-1/2'>
                <img src={details.image} alt="" className='w-[50%] ' />
                <p className='text-xl'>{details.name}</p>
            </div>
        </>
    )
}



