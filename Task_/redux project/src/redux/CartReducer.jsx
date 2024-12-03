import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    EMPTY_CART,
    CART_TO_WISHLIST
} from "./Constant";

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        case REMOVE_TO_CART:
            return {

            }

        case EMPTY_CART:
            return {

            }

        default: return state
    }
}

export const cartToWishlistReducer = (state = [], action) => {
    switch (action.type) {

        case CART_TO_WISHLIST:
            return [...state, action.payload]

        default: return state
    }
}