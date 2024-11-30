import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Useeffect_api = () => {

    const [data, setData] = useState([]);

    // console.log(data)




    // axios.get("https://fakestoreapi.com/products")
    //     .then((res) => {
    //         console.log(res.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })


    const fetchData = () => {
        const url = 'https://fakestoreapi.com/products';

        fetch(url)
            .then((res) =>
                res.json()
            )
            .then((res) => {
                console.log(res.products)
            })
    }


    // useEffect(() => {
    //     fetch('https://dummyjson.com/recipes')
    //         .then(res => res.json())
    //         .then((res) => {
    //             // setData(res.recipes);`
    //             console.log(res.recipes);

    //         })
    // }, [])


    fetchData();



    return (
        <div>
            abcd
        </div>
    )
}

export default Useeffect_api
