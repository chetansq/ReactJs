import React from 'react'
import Book_Context from '../context/Bookcontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const BookDetails = () => {
    const { booklist } = useContext(Book_Context)

    // console.log('bookdetails',booklist);

    console.log('book details');

    const navigate = useNavigate()

    return (
        <div className='h-screen bg-black w-screen'>
            <h1 className='text-white'>hello</h1>

            {
                booklist.map((details) => {
                    return (
                        <div key={details.id}>

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
                        </div>
                    )
                })
            }

            <div>
                <button className='text-center bg-blue-600 text-white py-1 px-4 mt-5 rounded hover:text-blue-600 border hover:border-blue-600 hover:bg-blue-100' onClick={() => navigate('/bookcard')}>Back</button>
            </div>
        </div>
    )
}

export default BookDetails