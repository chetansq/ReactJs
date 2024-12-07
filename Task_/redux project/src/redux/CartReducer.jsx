import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    EMPTY_CART,
    CART_TO_WISHLIST,
    EMPTY_WISHLIST,
    REMOVE_TO_WISHLIST
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

            const empty_data = () => {
                if (state.length == 0) {
                    alert('cart is empty');
                } else {
                    return state = []
                }
            }

            return empty_data()

        default: return state
    }
}

// export const cartToWishlistReducer = (state = [], action) => {
//     switch (action.type) {

//         case CART_TO_WISHLIST:
//             return [...state, action.payload]

//         case REMOVE_TO_WISHLIST:

//             const remove_wishlist_data = state.filter((state) => state.id !== action.payload.id)
//             console.log('remove_wishlist_data from CART', remove_wishlist_data);

//             return [...remove_wishlist_data];

//         case EMPTY_WISHLIST:
//             return state = []

//         default: return state
//     }
// }







// const remove_wishlist_data = state.slice(1);
// console.log('remove to wishlist',remove_wishlist_data);

// return [...remove_wishlist_data];

