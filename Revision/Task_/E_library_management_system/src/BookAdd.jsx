import React, { useContext } from 'react'
import { useState } from 'react'
import Book_Context from './context/Bookcontext'

const BookAdd = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [status, setStatus] = useState('')

    const { setBook } = useContext(Book_Context)

    const handleButton = (e) => {
        e.preventDefault()

        setBook({ title, author, status })
    }

    return (
        <div>
            <div className='bg-blue-900 text-white text-2xl text-center p-4'>ADD BOOK</div>
            <div className='container mx-auto flex flex-col justify-center items-center gap-6 h-[calc(100svh-64px)] bg-slate-200'>
                <div className='flex flex-col justify-center items-start gap-6 '>
                    <label htmlFor="title" className='flex gap-5 items-center '>
                        <p className='mr-5'> Title </p>
                        <input type="text" className='p-2' id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Book Title' />
                    </label>

                    <label htmlFor="author" className='flex gap-5 items-center'>
                        <p className=''> Author </p>
                        <input type="text" className='p-2' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Book Author' />
                    </label>

                    <label htmlFor="status" className='flex gap-5 items-center'>
                        <p className='mr-1'> Status </p>
                        <input type="text" className='p-2' id='status' value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Status' />
                    </label>
                </div>

                <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' onClick={handleButton}>Add</button>
            </div>

        </div>
    )
}

export default BookAdd
