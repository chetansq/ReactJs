import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST } from "./Constant";

export const wishlistReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {

            }
        case REMOVE_TO_WISHLIST:
            return {

            }
        case EMPTY_WISHLIST:
            return {

            }
        default: return state
    }
}
