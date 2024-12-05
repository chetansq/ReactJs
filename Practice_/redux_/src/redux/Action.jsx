import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    CART_TO_WISHLIST,
    REMOVE_TO_CART,
    REMOVE_TO_WISHLIST
} from "./Constant";

// cart action

export const add_to_cart = (for_add_to_card) => {
    return {
        type: ADD_TO_CART,
        payload: for_add_to_card
    }
}

export const remove_to_cart = (for_remove_to_card) => {
    return {
        type: REMOVE_TO_CART,
        payload: for_remove_to_card
    }
}

// wishlist action 

export const add_to_wishlist = () => {
    return {
        type: ADD_TO_WISHLIST
    }
}

export const cart_to_wishlist = (for_cart_to_wishlist) => {
    return {
        type: CART_TO_WISHLIST,
        payload: for_cart_to_wishlist

    }
}

export const remove_to_wishlist = (for_remove_to_card) => {
    return {
        type: REMOVE_TO_WISHLIST,
        payload: for_remove_to_card
    }
}