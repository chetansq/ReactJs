import React from 'react'
import { FiSearch } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { TiPlus } from "react-icons/ti";

const tableDetails = [
    {
        id: 1,
        name: 'pillow',
        desc: 'Sleeping well is important.',
        price: 8.99,
        category: 'Personal'
    },
    {
        id: 2,
        name: 'Earphone',
        desc: 'You need this one if you love music.',
        price: 9.00,
        category: 'Personal'
    },
    {
        id: 3,
        name: 'Mouse',
        desc: 'Very useful if you love your computer.',
        price: 11.35,
        category: 'Personal'
    },
    {
        id: 4,
        name: 'Trash Can',
        desc: 'It will help you maintain cleanliness.',
        price: 3.95,
        category: 'Sports'
    },
    {
        id: 5,
        name: 'Eye Glasses',
        desc: 'It will make you read better.',
        price: 6.00,
        category: 'Sports'
    },
]

const Table = () => {

    return (
        <div>
            <p className='text-4xl my-5'>Crud Operation</p>

            <hr />

            <div className='m-5 flex justify-between'>

                <div className='flex items-center  w-[20%]'>
                    <input type="text" placeholder='Type a name...' className='border  p-1  w-full' />
                    <div className='bg-sky-700 p-2 text-white rounded-e-md'>
                        <FiSearch className='' />
                    </div>
                </div>

                <div className='flex gap-3  items-center'>
                    <button className='flex  items-center bg-red-500 text-white p-2 rounded-md'><TiDelete className='text-xl' /> Delete Selected</button>
                    <button className='flex  items-center bg-cyan-600 text-white p-2 rounded-md'><MdOutlineDownloadForOffline className='text-xl' /> Export CSV</button>
                    <button className='flex  items-center bg-cyan-700  text-white p-2 rounded-md'> <TiPlus className='text-xl' />Create Record</button>
                </div>
            </div>

            <div>
                <div>
                    <table className="table-auto w-full border-2">
                        <thead>
                            <tr className='py-5'>
                                <th><input type="checkbox" /></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>

                            {
                                tableDetails.map((current) => {
                                    return (
                                        <tr className='text-center '>
                                            <td><input type="checkbox" /></td>
                                            <td> {current.name} </td>
                                            <td> {current.desc} </td>
                                            <td> {current.price} </td>
                                            <td> {current.category} </td>
                                            <td className='flex justify-center gap-4'>
                                                <button className='bg-cyan-500 py-1 px-4 rounded-md text-white '>Edit</button>
                                                <button className='bg-red-500 py-1 px-4 rounded-md text-white'> Delete</button>
                                            </td>
                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}

export default Table


