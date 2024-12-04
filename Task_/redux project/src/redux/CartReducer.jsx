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

            const remove_cart_data = state.filter((state) => state.id !== action.payload.id)
            console.log('remove_cart_data from CART', remove_cart_data);

            return [...remove_cart_data];

            // const removeData = state.splice(1);
            // return [...removeData];


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