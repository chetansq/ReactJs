import {
    ADD_TO_WISHLIST,
    REMOVE_TO_WISHLIST,
    EMPTY_WISHLIST,
    WISHLIST_TO_CART
} from "./Constant";

export const wishlistReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload]

        case REMOVE_TO_WISHLIST:

            // const remove_wishlist_data = state.slice(1);
            // console.log('remove to wishlist',remove_wishlist_data);

            // return [...remove_wishlist_data];



            const remove_wishlist_data = state.filter((state) => state.id !== action.payload.id)
            console.log('remove_wishlist_data from CART', remove_wishlist_data);

            return [...remove_wishlist_data];


        case EMPTY_WISHLIST:
            return {

            }

        case WISHLIST_TO_CART:
            return {

            }

        default: return state
    }
}
