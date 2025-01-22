import React, { useReducer, useState } from 'react'
import Context from './Context'
import { ExpenseReducer } from '../reducers/ExpensesReducer'

const intialstate = {
    expenses : [
        {
            id: 1,
            description : "home",
            amount : 5000,
            category : "rent"
        }
    ]
}

const ExpenseProvider = ({ children }) => {

    // const [Add_Expense, setAdd_Expense] = useState([])
    comst [state,dispatch] = useReducer(ExpenseReducer,intialstate)
    return (
        <div>

            <Context.Provider value={{ Add_Expense, setAdd_Expense }}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default ExpenseProvider