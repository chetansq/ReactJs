import React, { useContext, useEffect, useState } from 'react'
import User_Context from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const BookUpdate = () => {

    const { edit, setData, datalist } = useContext(User_Context)

    const navigate = useNavigate()

    const [update, setUpdate] = useState({
        email: edit.email || " ",
        password: edit.password || " ",
    })

    console.log('update', update);


    const Update_data = (e) => {
        e.preventDefault();

        const updatedBooklist = datalist.map((bookItem) => {
            if (bookItem.id === edit.id) {
                return { ...bookItem, ...update };
            }
            return bookItem;
        });

        setData(updatedBooklist);

    }

    return (
        <div className='bg-blue-100'>
            <p className='p-3  flex justify-center  items-center '>Update page</p>

            <div className='container mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-[calc(100svh-120px)]' >
                <div className='flex flex-col justify-center items-start gap-6 '>
                    <label htmlFor="email" className='flex gap-5 items-center'>
                        <p className='text-black mr-5'> email </p>
                        <input type="text" className='p-2' name='email' id='email' value={update.email} onChange={(e) => setUpdate({ ...update, email: e.target.value })} placeholder='Book email' />
                    </label>
                    <label htmlFor="password" className='flex gap-5 items-center'>
                        <p className='text-black '> password </p>
                        <input type="text" className='p-2' name='password' id='password' value={update.password} onChange={(e) => setUpdate({ ...update, password: e.target.value })} placeholder='Book password' />
                    </label>

                </div>
                <div>

                    <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={(e) => {
                        Update_data(e)
                        navigate('/profile')
                    }}>Update</button>

                    <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={() => navigate('/profile`')}>Back</button>
                </div>
            </div>



        </div>
    )
}


export default BookUpdate
