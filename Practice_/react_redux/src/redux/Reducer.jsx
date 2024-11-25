import { BUY_COLDRINKS } from "./Constant";

const initialValues = {
    NumOfcoldrinks: 10
}

const coldrinksReducer = (state = initialValues, action) => {

    switch (action.type) {
        case BUY_COLDRINKS:

        console.log("buy coldrinks");
            return {
                ...state,
                NumOfcoldrinks: state.NumOfcoldrinks - 1
            }

        default: return state
    }
}

export default coldrinksReducer;
