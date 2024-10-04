import React, { useState, useEffect, useRef } from 'react'

const Recipe_api = () => {

    const [data, setData] = useState([]);
    const [input, setInput] = useState();


    let fetch_data = useRef([])

    // for data show
    useEffect(
        () => {
            fetch('https://dummyjson.com/recipes?limit=50').then((res) => res.json()).then((res) => {
                setData(res.recipes);
                fetch_data.current.push(...res.recipes);
                console.log(res.recipes)
            })
        }, []
    )

    // for data search

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/search?q=${input}`).then((res) => res.json()).then((res) => {
            setData(res.recipes);
            console.log(res.recipes)
        })
    }, [input])


    const search_data = () => {
        let input_ = document.getElementById('input_data').value.toLowerCase();
        setInput(input_);
    }

    return (
        <div className='mx-5 my-4'>
            <div className='flex justify-center items-center gap-4 p-4 border my-3'>
                <input type="search" placeholder='search item...' className='text-black border p-2' id='input_data' onChange={search_data} />
                {/* <button className='bg-red-300 p-2  hover:bg-black hover:text-white' onClick={search_data} >SEARCH</button> */}
            </div>
            <div className='text-center'>
                <p className='text-4xl my-10 '>Recipes</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center items-center gap-5 overflow-hidden  '>
                {

                    data.map((current, index) => {
                        return (

                            <Recipes key={index} details={current} />
                        )
                    })
                }
            </div>

            <div>

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
                        <p className='text-xl font-bold my-2' id='tittle_'>{details.name}</p>
                        <p> {details.ingredients[0]}</p>
                        <p> {details.instructions[3]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// function search_() {
//     console.log('hello')

//     return (
//         <div className='h-screen bg-black w-screen'>
//             hello
//         </div>
//     )
// }
