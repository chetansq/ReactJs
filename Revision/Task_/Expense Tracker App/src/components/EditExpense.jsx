import React, { useState } from 'react'
import { useContext } from 'react'
import Context from '../context/Context'

const EditExpense = () => {
  const { dispatch, state } = useContext(Context);

  const [updateData, setUpdateData] = useState({
    amount: state.amount || '',
    description: state.description || '',
    category: state.category || ''
  })

  console.log("updateData", updateData);
  console.log("amount", state.amount);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", amount, description, category })

    setUpdateData({
      amount: '',
      description: '',
      category: ''
    })
  }

  return (
    <div className='bg-[#D3D9D4] h-[calc(100svh-56px)]'>
      <div className='h-full flex items-center justify-around'>

        <div className=' mx-5 flex flex-col gap-5 items-center justify-center h-full '>

          {/* Amount */}

          <div className=''>
            <label htmlFor="amount" className='flex gap-[55px] items-center '>
              <span className='text-xl'>Amount </span>
              <input type="number" name='amount' className='py-3 px-6 mx-2' placeholder='Only Number' value={updateData.amount} onChange={(e) => setUpdateData({ ...updateData, amount: e.target.value })} />
            </label>
          </div>

          {/* Description */}

          <div>
            <label htmlFor="desc" className='flex gap-6 items-center '>
              <span className='text-xl'>Description</span>
              <input type="text" name='description' className='py-3 px-6 mx-2' placeholder='as you write' value={updateData.description} onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })} />
            </label>
          </div>

          {/* Category */}

          <div>
            <label htmlFor="category" className='flex gap-11 items-center '>
              <span className='text-xl'>Category</span>
              <select name="category" id="category" className='py-3 px-[65px]  mx-2' value={updateData.category} onChange={(e) => setUpdateData({ ...updateData, category: e.target.value })}>
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
            <button className='bg-[#124E66] px-6 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded' onClick={handleUpdate}>Update</button>
            <button className='bg-[#124E66] px-5 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded'>Cancle</button>
          </div>
        </div>


        <div className=''>
          <img src="https://img.freepik.com/free-vector/remittance-money-forward-cash-overseas-direct-funding-give-allowance-spare-sum-getting-payroll-transferring-forex-money-drop-coin-vector-isolated-concept-metaphor-illustration_335657-2159.jpg?t=st=1737715724~exp=1737719324~hmac=36a8bf599691ef6e57f5306252b21b170183a80a85bdf58ade96044b5b7fcaea&w=600" alt="" />
        </div>
      </div>



    </div>
  )
}

export default EditExpense