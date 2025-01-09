import React, { useContext } from 'react'
import Book_Context from '../context/Bookcontext'
import { useNavigate } from 'react-router-dom'


const BookAdd = () => {

    const navigate = useNavigate()

    const { setBook } = useContext(Book_Context)

    const { booklist } = useContext(Book_Context)



    console.log('update page', booklist);

    const Update_data = () => {


        setBook([...booklist, { title, author, status }])
    }

    return (
        <div className='bg-blue-100'>
            {
                booklist.map((item) => {
                    return (
                        <div className='container mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-[calc(100svh)]' key={item.id}>
                            <div className='flex flex-col justify-center items-start gap-6 '>
                                <label htmlFor="title" className='flex gap-5 items-center'>
                                    <p className='text-black mr-5'> Title </p>
                                    <input type="text" className='p-2' name='title' id='title' value={item.title} placeholder='Book Title' />
                                </label>

                                <label htmlFor="author" className='flex gap-5 items-center'>
                                    <p className='text-black '> Author </p>
                                    <input type="text" className='p-2' name='author' id='author' value={item.author} placeholder='Book Author' />
                                </label>

                                <label htmlFor="status" className='flex gap-5 items-center'>
                                    <p className='text-black mr-1'> Status </p>
                                    <input type="text" className='p-2' name='status' id='status' value={item.status} placeholder='Status' />
                                </label>
                            </div>
                            <div>

                                <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={Update_data}>Update</button>

                                <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={() => navigate('/bookcard')}>Back</button>
                            </div>
                        </div>
                    )
                })
            }
            <p className='bg-blue-400 p-3 m-4 flex justify-center  items-center '>Update page</p>


        </div>
    )
}


export default BookAdd
