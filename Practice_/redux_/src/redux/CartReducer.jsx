import { ADD_TO_CART } from "./Constant";

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        default: return state
    }
}