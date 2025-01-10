import React from 'react'
import Book_Context from '../context/Bookcontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const BookDetails = () => {
    const { singleBook } = useContext(Book_Context)

    const navigate = useNavigate()

    return (
        <div className='h-screen bg-blue-100 w-screen'>
            <div className='flex   gap-5'>

                {
                    singleBook.map((details) => {
                        return (
                            <div key={details.id} className='flex justify-center items-center '>
                                <div className="flex-1  min-w-0  p-3 *:text-bold gap-3 border   mt-10">
                                    <p className=" font-medium text-gray-900 truncate ">
                                        Title :
                                        <span className='text-gray-500'>
                                            {details.title}
                                        </span>
                                    </p>

                                    <p className=" text-gray-900 truncate ">
                                        Author :
                                        <span className='text-gray-500'>
                                            {details.author}
                                        </span>
                                    </p>

                                    <p className=" text-gray-900 truncate ">
                                        Status:
                                        <span className='text-gray-500'>
                                            {details.status}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>

                <button className='text-center bg-blue-600 text-white py-1 px-4 mt-5 rounded hover:text-blue-600 border hover:border-blue-600 hover:bg-blue-100' onClick={() => navigate('/bookcard')}>Back</button>
            </div>
        </div >
    )
}

export default BookDetails