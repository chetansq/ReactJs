import React, { useState } from 'react'

const FormHandling = () => {

    const [data, setData] = useState([]);

    const obj = () => {
        const user = document.getElementById('user_name').value;
        const pass_word = document.getElementById('pwd').value;
        setData([user, pass_word]);

    }

    return (
        <div className='flex flex-col gap-6 justify-center items-center h-screen bg-slate-400 '>
            <form action="" onSubmit={obj} className='flex flex-col justify-center items-center w-[30%] p-20 gap-4 rounded bg-gray-700 '>
                <label htmlFor="username"></label>
                <input type="text" placeholder='UserName' className='border p-2 px-5 rounded w-full' id='user_name' />

                <label htmlFor="password"></label>
                <input type="password" placeholder='Password' className='border p-2 px-5 rounded w-full' id='pwd' />

                <button type='submit' className='bg-black text-white p-2 hover:bg-gray-300 hover:text-black rounded' >Submit</button>
            </form>

            <div className='flex flex-col gap-4'>
                <p>your Name:{data[0]}</p>
                <p>password:{data[1]}</p>

            </div>
        </div>
    )
}



export default FormHandling
