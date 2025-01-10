import React, { useContext } from 'react'
import { useState } from 'react'
import Book_Context from '../context/Bookcontext'
import img from '../assets/page_title_blog.png'
import { v4 as uuidv4 } from "uuid"
import BookUpdate from './BookUpdate'

const BookAdd = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [status, setStatus] = useState('')
    const [btn, setBtn] = useState(false)

    const id = uuidv4();

    const { setBook } = useContext(Book_Context)

    const { booklist } = useContext(Book_Context)

    const handleButton = (e) => {

        if (title, author, status == "") {
            setBtn(false)
        } else {
            setBtn(true)
            e.preventDefault()

            setBook([...booklist, { id, title, author, status }])
            
            setTitle('')
            setAuthor('')
            setStatus('')
        }

    }

    return (
        <div className='bg-black'>
            {/* <div className=' text-black text-2xl text-center p-6 relative' style={{ backgroundImage: `url(${img})` }}>ADD BOOK</div> */}
            <div className='container mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-[calc(100svh)]' style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256262_1280.jpg')`, backgroundRepeat: 'no-repeat' }}>
                <div className='flex flex-col justify-center items-start gap-6 '>
                    <label htmlFor="title" className='flex gap-5 items-center'>
                        <p className='text-white mr-5'> Title </p>
                        <input type="text" className='p-2' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Book Title' />
                    </label>

                    <label htmlFor="author" className='flex gap-5 items-center'>
                        <p className='text-white '> Author </p>
                        <input type="text" className='p-2' name='author' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Book Author' />
                    </label>

                    <label htmlFor="status" className='flex gap-5 items-center'>
                        <p className='text-white mr-1'> Status </p>
                        <input type="text" className='p-2' name='status' id='status' value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Status' />
                    </label>
                </div>

                <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white ' id='submit' onClick={handleButton} disabled={false}>Add</button>
            </div>

        </div>
    )
}


export default BookAdd
