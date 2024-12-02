import { PRODUCT_SET } from "./Constant";

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case PRODUCT_SET:
            return [...state, action.paylod]

        default: return state
    }
}