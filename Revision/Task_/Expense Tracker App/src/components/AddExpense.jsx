import React from 'react'

const AddExpense = () => {
    return (
        <div className='bg-[#D3D9D4] h-[calc(100svh-56px)]'>
            <div className='h-full flex items-center justify-around'>

                <div className=' mx-5 flex flex-col gap-5 items-center justify-center h-full '>

                    {/* Amount */}

                    <div className=''>
                        <label htmlFor="amount" className='flex gap-12 items-center '>
                            <span className='text-xl'>Amount </span>
                            <input type="text" className='py-3 px-6 mx-2' placeholder='Only Number' />
                        </label>
                    </div>

                    {/* Description */}

                    <div>
                        <label htmlFor="desc" className='flex gap-6 items-center '>
                            <span className='text-xl'>Description</span>
                            <input type="text" className='py-3 px-6 mx-2' placeholder='as you write' />
                        </label>
                    </div>

                    {/* Category */}

                    <div>
                        <label htmlFor="category" className='flex gap-11 items-center '>
                            <span className='text-xl'>Category</span>
                            <select name="category" id="category" className='py-3 px-[72px]  mx-2'>
                                <option value=""> Select </option>
                                <option value="home">Home</option>
                                <option value="market">Market</option>
                                <option value="personal">Personal</option>
                                <option value="extra">Extra</option>
                            </select>
                        </label>
                    </div>

                    {/* Add Button */}
                    <div className='flex  items-center gap-4'>

                        <button className='bg-[#124E66] px-6 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded'>Add</button>
                        <button className='bg-[#124E66] px-5 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded'>Cancle</button>
                    </div>
                </div>


                <div className=''>
                    <img src="https://img.freepik.com/premium-vector/data-analytics-character-illustration-editable-vector_203633-4329.jpg?w=826" alt="" />
                </div>
            </div>



        </div>
    )
}

export default AddExpense