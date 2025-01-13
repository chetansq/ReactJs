import React, { useContext, useEffect, useState } from 'react'
import Book_Context from '../context/Bookcontext'
import { useNavigate } from 'react-router-dom'

const BookUpdate = ({ book }) => {

    const { setSingleBook } = useContext(Book_Context)

    const { singleBook } = useContext(Book_Context)
    
    const navigate = useNavigate()

    const [edit, setEdit] = useState({
        title:"",
        author:"",
        status:""
    })


    console.log('edit' , edit);

    // const [author, setAuthor] = useState('')
    // const [status, setStatus] = useState('')

    // useEffect(() => {
    //     if (book) {
    //         setEdit(book.title)
    //     }

    // }, [book])

    console.log('book', book);

    // const Update_data = (e) => {
    //     e.preventDefault()

    //     setSingleBook(singleBook.filter((e) => e.title === singleBook.title))

    //     setSingleBook([...singleBook, { title, author, status }])
    // }


    return (
        <div className='bg-blue-100'>
            <p className='p-3  flex justify-center  items-center '>Update page</p>

            <div className='container mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-[calc(100svh-120px)]' >
                <div className='flex flex-col justify-center items-start gap-6 '>
                    <label htmlFor="title" className='flex gap-5 items-center'>
                        <p className='text-black mr-5'> Title </p>
                        <input type="text" className='p-2' name='title' id='title' value={edit.title} onChange={(e) => setEdit({...edit , title:e.target.value})} placeholder='Book Title' />
                    </label>
                    <label htmlFor="author" className='flex gap-5 items-center'>
                        <p className='text-black '> Author </p>
                        <input type="text" className='p-2' name='author' id='author' value={edit.author} onChange={(e) => setEdit({...edit , author:e.target.value})} placeholder='Book Author' />
                    </label>
                    <label htmlFor="status" className='flex gap-5 items-center'>
                        <p className='text-black mr-1'> Status </p>
                        <input type="text" className='p-2' name='status' id='status' value={edit.status} onChange={(e) => setEdit({...edit , status:e.target.value})}  placeholder='Status' />
                    </label>
                </div>
                <div>

                    <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={(e) => {
                        Update_data(e)
                        navigate('/bookcard')
                    }}>Update</button>

                    <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={() => navigate('/bookcard')}>Back</button>
                </div>
            </div>



        </div>
    )
}


export default BookUpdate
