import React, { useEffect, useState } from 'react'
import axios from "axios"

const GetRequest = () => {

    const [data, setData] = useState([])

    console.log(data);

    const handleData = () => {
        axios.get("http://localhost:3000/profile").then((response) => setData(response.data)).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div>
            {
                data.map((data_) => {
                    return (
                        <ul className='text-left'>
                            <li>Name : <span>{data_.name}</span></li>
                            <li>Email : <span>{data_.email}</span></li>
                            <li>Phone : <span>{data_.phone}</span></li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default GetRequest
