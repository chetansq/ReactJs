import React, { useState } from 'react'
import axios from 'axios'


const PostRequest = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    const handleSubmit = () => {
        try {
            let apiData = axios.post("http://localhost:3000/profile", {
                name, email, phone
            })

            console.log(apiData);
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex gap-5 justify-center'>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='name' />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <input type="tel" onChange={(e) => setPhone(e.target.value)} placeholder='phone' />

                <button type='submit' className='bg-green-700 text-white py-1 px-4'>submit</button>
            </form>
        </div>
    )
}

export default PostRequest