import React, { useReducer, useState } from 'react'
import Context from './Context'
import { ExpenseReducer } from '../reducers/ExpensesReducer'

const intialstate = {
    expenses : [
        {
            id: 1,
            description : "home",
            amount : 5000,
            category : "bank"
        }
    ]
}

const ExpenseProvider = ({ children }) => {

    // const [Add_Expense, setAdd_Expense] = useState([])
    const [state,dispatch] = useReducer(ExpenseReducer,intialstate);
    
    console.log(state)

    return (
        <div>

            <Context.Provider value={{state,dispatch}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default ExpenseProvider