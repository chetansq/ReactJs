import { ADD_TO_CART, REMOVE_TO_CART } from "./Constant";

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        case REMOVE_TO_CART:
            const remove_data = state.filter((state) => state.id !== action.payload.id)

            console.log("remove data", remove_data);

            return [...remove_data];
        default: return state
    }
}