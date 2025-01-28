export const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                expenses: [...state.expenses,
                {
                    id: Date.now(),
                    description: action.description,
                    amount: action.amount,
                    category: action.category
                }
                ]
            }

        case "UPDATE":
            console.log("state on reducer", state);

            return {
                ...state,
                expenses: [...state.expenses,
                {
                    description: action.description,
                    amount: action.amount,
                    category: action.category
                }
                ]

            }
        default: return state
    }
}