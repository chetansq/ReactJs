import React, { useContext, useState } from 'react'
import User_Context from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()

    const [search, setSearch] = useState("")

    const { datalist, setSingleBook, setData, setEdit } = useContext(User_Context)

    console.log('data list', datalist);

    // const searchFilteredData = datalist.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='flex flex-col justify-start items-center bg-blue-100 min-h-full'>

            <label htmlFor="search" className='flex gap-5 items-center my-2 '>
                <input type="search" className='p-2 border ' id='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
            </label>
            {
                datalist.length == 0 ? <div className='text-4xl flex justify-center items-center h-[calc(100svh-65px)] bg-blue-100  w-screen text-red-600'>No Data Available</div> : datalist.map((details) => {
                    return (
                        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 my-4 " key={details.id}>
                            <div className="flow-root text-center">
                                <ul role="list" className="divide-y divide-gray-200 text-start">
                                    <li className="pt-3 pb-0 sm:pt-4">
                                        <div className="flex items-center ">

                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate ">
                                                    Title : {details.email}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate ">
                                                    Author :  {details.password}
                                                </p>

                                            </div>

                                            <div className="inline-flex items-center text-base font-semibold text-gray-900  gap-4">

                                                <button className='bg-green-600 text-white rounded hover:bg-green-100 hover:text-green-700 border hover:border-green-700 py-1 px-3' onClick={() => {
                                                    setEdit(details);
                                                    navigate('/bookupdate');
                                                }}>Update</button>

                                                <button className='bg-red-600 text-white rounded hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-1 px-3' onClick={() => { setData(datalist.filter((item) => item.id !== details.id)) }}>Delete</button>

                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div>
                                    <button className='text-center bg-blue-600 text-white py-1 px-4 mt-5 rounded hover:text-blue-600 border hover:border-blue-600 hover:bg-blue-100' onClick={() => {
                                        setSingleBook(datalist.filter((item) => item.id === details.id))
                                        navigate('/bookdetails')
                                    }}>
                                        Read More
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Profile
