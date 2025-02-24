import React, { useEffect, useState } from 'react'
import axios from "axios"

const Get_Request = () => {

    const [data, setData] = useState([])

    console.log(data);

    const handleData = () => {
        axios.get("http://localhost:3000/profile_Data").then((response) => setData(response.data)).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        handleData()
    }, []);

    return (
        <div>

            <h1 className='bg-blue-600 py-4 text-white w-fit px-2 my-4'>Get with Axios</h1>
            <div>
                {
                    data.map((user) => {
                        return (
                            <ul className='text-left'>
                                <li>Name : <span>{user.name}</span></li>
                                <li>Email : <span>{user.email}</span></li>
                                <li>Phone : <span>{user.phone}</span></li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Get_Request;
