import React, { useEffect, useState } from 'react'

const Recipes = () => {

    const [data, setData] = useState([]);
    useEffect(

        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(res => res.recipes);
    setData(res.recipes)
    )
return (
    <div>
        {
            data.map((crr) => {
                <div className="">
                    <p>{crr.name}</p>
                    <img src={crr.image} alt="" />
                </div>
            })
        }
    </div>
)
}

export default Recipes
