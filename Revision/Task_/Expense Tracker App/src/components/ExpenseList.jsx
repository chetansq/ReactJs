import React, { useContext } from 'react'
import Context from '../context/Context';

const ExpenseList = () => {
  const { state } = useContext(Context);



  console.log(state, "as")
  return (
    <div className='bg-[#D3D9D4]  h-[calc(100svh-56px)]'>
      {state.expenses.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.amount}</li>
            <li>{item.description}</li>
            <li>{item.category}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default ExpenseList