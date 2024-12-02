import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.paylod]

        case REMOVE_TO_CART:
            return {

            }

        case EMPTY_CART:
            return {

            }

        default: return state
    }
}