import React, { useContext } from 'react'
import { useState } from 'react'
import User_Context from '../context/UserContext'
import img from '../assets/page_title_blog.png'
import { v4 as uuidv4 } from "uuid"

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [btn, setBtn] = useState(false)


    const { setData, datalist } = useContext(User_Context)


    const handleButton = (e) => {
        e.preventDefault();

        if (user.email, user.password == "") {
            setBtn(false)
        } else {
            setBtn(true)

            const newBook = {
                id: uuidv4(), // Generate a unique ID
                email: user.email,
                password: user.password,
            };

            setData(() => [...datalist, newBook]) //add.title, add.author, add.status

            setUser({
                email: '',
                password: ''
            });
            setBtn(false)
        }

    }

    return (
        <div className='bg-black'>
            {/* <div className=' text-black text-2xl text-center p-6 relative' style={{ backgroundImage: `url(${img})` }}>ADD BOOK</div> */}
            <div className='container  mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-[calc(100svh)]' style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256262_1280.jpg')`, backgroundRepeat: 'no-repeat' }}>
                <div className='flex flex-col justify-center items-start gap-6 '>
                    <label htmlFor="email" className='flex gap-5 items-center'>
                        <p className='text-white mr-5'> Email </p>
                        <input type="email" className='p-2' name='email' id='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='email' />
                    </label>

                    <label htmlFor="password" className='flex gap-5 items-center'>
                        <p className='text-white '> Password </p>
                        <input type="password" className='p-2' name='password' id='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='Enter Password' />
                    </label>


                </div>

                <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={handleButton} disabled={btn}>Submit</button>
            </div>

        </div>
    )
}

export default Login
