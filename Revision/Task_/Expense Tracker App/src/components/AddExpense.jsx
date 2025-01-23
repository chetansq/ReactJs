import React, { useState } from 'react'
import { useContext } from 'react'
import Context from '../context/Context'

const AddExpense = () => {

    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')


    const { dispatch } = useContext(Context);


    const handleAdd = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD",  amount, description, category })
    }

    return (
        <div className='bg-[#D3D9D4] h-[calc(100svh-56px)]'>
            <div className='h-full flex items-center justify-around'>

                <div className=' mx-5 flex flex-col gap-5 items-center justify-center h-full '>

                    {/* Amount */}

                    <div className=''>
                        <label htmlFor="amount" className='flex gap-[55px] items-center '>
                            <span className='text-xl'>Amount </span>
                            <input type="number" className='py-3 px-6 mx-2' placeholder='Only Number' value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </label>
                    </div>

                    {/* Description */}

                    <div>
                        <label htmlFor="desc" className='flex gap-6 items-center '>
                            <span className='text-xl'>Description</span>
                            <input type="text" className='py-3 px-6 mx-2' placeholder='as you write' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                    </div>

                    {/* Category */}

                    <div>
                        <label htmlFor="category" className='flex gap-11 items-center '>
                            <span className='text-xl'>Category</span>
                            <select name="category" id="category" className='py-3 px-[65px]  mx-2' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value=""> Select </option>
                                <option value="home">Home</option>
                                <option value="vegmarket">Veg.Market</option>
                                <option value="personal">Personal</option>
                                <option value="medicine">Medicine</option>
                                <option value="travel">Travel</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="bank">Bank</option>
                                <option value="light bill">Light Bill</option>
                                <option value="extra">Extra</option>
                            </select>
                        </label>
                    </div>

                    {/* Add Button */}
                    <div className='flex  items-center gap-4'>
                        <button className='bg-[#124E66] px-6 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded' onClick={handleAdd}>Add</button>
                        <button className='bg-[#124E66] px-5 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded'>Cancle</button>
                    </div>
                </div>


                <div className=''>
                    <img src="https://img.freepik.com/premium-vector/data-analytics-character-illustration-editable-vector_203633-4329.jpg?w=600" alt="" />
                </div>
            </div>



        </div>
    )
}

export default AddExpense