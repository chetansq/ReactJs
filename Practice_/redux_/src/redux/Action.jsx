import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    CART_TO_WISHLIST
} from "./Constant";

// cart action

export const add_to_cart = (for_add_to_card) => {
    return {
        type: ADD_TO_CART,
        payload: for_add_to_card
    }
}

// wishlist action 

export const add_to_wishlist = () => {
    return {
        type: ADD_TO_WISHLIST
    }
}

export const cart_to_wishlist = () => {
    return {
        type: CART_TO_WISHLIST
    }
}