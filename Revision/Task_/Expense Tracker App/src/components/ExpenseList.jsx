import React, { useContext } from 'react'
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom'

const ExpenseList = () => {

  const { state, dispatch } = useContext(Context);

  console.log('state', state);


  const navigate = useNavigate()


  const update_ = (item) => {

    console.log("function call", item);
    const change = [...state.expenses, state.expenses.filter(data => data.id === item.id)]
    console.log('changes', change);
    dispatch({ type: "UPDATE", change })

    navigate('/editexpense')
  }

  console.log(state, "as")
  return (
    <div className='bg-[#D3D9D4]  h-[calc(100svh-56px)]  '>
      <div className='container mx-auto flex  gap-5'>

        {state.expenses.map((item) => {
          return (
            <div key={item.id} className='bg-[#D3D9D4] p-10 '>

              <div className='bg-[#748D92] px-6 py-2 text-white  border rounded  grid gap-5 '>

                <ul className='grid grid-cols-2'>
                  <span>Amount  </span>
                  <li>  {item.amount}</li>
                  <span>Description  </span>
                  <li> {item.description}</li>
                  <span>Category  </span>
                  <li>{item.category}</li>
                </ul>
                <div>
                  <hr />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <button className='bg-[#124E66] px-6 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded' onClick={() => update_(item)}>Update</button>
                  <button className='bg-[#124E66] px-6 py-2 text-white hover:text-[#124E66] hover:border-[#124E66] hover:bg-[white] border rounded'>Remove</button>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default ExpenseList