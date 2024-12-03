import { CART_TO_WISHLIST, ADD_TO_WISHLIST } from "./Constant";

export const cartToWishlistReducer = (state = [], action) => {
    switch (action.type) {
        case CART_TO_WISHLIST:
            return {

            }
        default: return state
    }

}

export const addToWishlistreducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {

            }

        default: return state
    }
}