import React, { useContext, useState } from 'react'
import Book_Context from '../context/Bookcontext'
import BookDetails from './BookDetails'

const BookCard = () => {

    const [data, setData] = useState('')
    const { booklist } = useContext(Book_Context)

    const ReadMore = () => {
        <BookDetails />
        // setData(booklist.title, booklist.author.booklist.status)
    }
    // setViewBook(book)
    // console.log('book  card page', setViewBook(book));\
    console.log('book card', booklist);


    return (

        <div className='flex  justify-center items-center'>
            {
                booklist.length == 0 ? <div className='text-4xl flex justify-center items-center h-[calc(100svh-65px)] bg-blue-100 w-screen text-red-600'>No Books Available</div> : booklist.map((details) => {
                    return (
                        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  " key={details}>

                            <div className="flow-root text-center">
                                <ul role="list" className="divide-y divide-gray-200 text-start">

                                    <li className="pt-3 pb-0 sm:pt-4">
                                        <div className="flex items-center ">

                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate ">
                                                    Title : {details.title}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate ">
                                                    Author :  {details.author}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate ">
                                                    Status:{details.status}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900  gap-4">
                                                <button className='bg-green-600 text-white rounded hover:bg-green-100 hover:text-green-700 border hover:border-green-700 py-1 px-3'>Update</button>
                                                <button className='bg-red-600 text-white rounded hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-1 px-3'>Delete</button>
                                            </div>

                                        </div>
                                    </li>
                                </ul>

                                <div>
                                    <button className='text-center bg-blue-600 text-white py-1 px-4 mt-5 rounded hover:text-blue-600 border hover:border-blue-600 hover:bg-blue-100' onClick={ReadMore}>Read More</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default BookCard
