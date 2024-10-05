import React, { useState } from 'react'

const MultiFormHandling = () => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const obj = (e) => {
        e.preventDefault()
        console.log(data);
        setData(
            {
                username: '',
                email: '',
                password: ''
            }
        )
    }
    return (
        <div className='flex flex-col gap-6 justify-center items-center h-screen bg-slate-400 '>
            <form action="" className='flex flex-col justify-center items-center w-[30%] p-20 gap-4 rounded bg-gray-700 '>
                {/* username */}
                <label htmlFor="username"></label>
                <input type="text" placeholder='UserName' className='border p-2 px-5 rounded w-full' name="username" id='user_name' value={data.username} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                {/* email */}
                <label htmlFor="email"></label>
                <input type="text" placeholder='email' className='border p-2 px-5 rounded w-full' name="email" id='email' value={data.email} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                {/* password */}
                <label htmlFor="password"></label>
                <input type="password" placeholder='Password' className='border p-2 px-5 rounded w-full' name="password" id='pwd' value={data.password} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                {/* submit */}
                <button type='submit' className='bg-black text-white p-2 hover:bg-gray-300 hover:text-black rounded' onClick={obj} >Submit</button>

            </form>

            <div className='flex flex-col gap-4'>
                <div>
                    <p>your Name:{data.username}</p>
                    <p>password:{data.password}</p>
                </div>

            </div>
        </div>
    )
}

export default MultiFormHandling
