import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    EMPTY_CART,
    CART_TO_WISHLIST,
    ADD_TO_WISHLIST,
    REMOVE_TO_WISHLIST,
    EMPTY_WISHLIST,
    WISHLIST_TO_CART
} from "./Constant";


// for cart

export const add_to_cart = (for_add_to_cart) => {
    return {
        type: ADD_TO_CART,
        payload: for_add_to_cart
    }
}
export const remove_to_cart = (for_remove_to_cart) => {
    return {
        type: REMOVE_TO_CART,
        info: 'remove to cart called',
        payload: for_remove_to_cart
    }
}

export const empty_cart = () => {
    return {
        type: EMPTY_CART,
        info: 'empty cart called'
    }
}

export const cart_to_wishlist = (for_cart_to_wishlist) => {
    return {
        type: CART_TO_WISHLIST,
        payload: for_cart_to_wishlist
    }
}


// for wishlist

export const add_to_wishlist = (for_add_to_wishlist) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: for_add_to_wishlist
    }
}
export const remove_to_wishlist = (for_remove_to_wishlist) => {
    return {
        type: REMOVE_TO_WISHLIST,
        info: 'remove to wishlist called',
        payload: for_remove_to_wishlist
    }
}
export const empty_wishlist = () => {
    return {
        type: EMPTY_WISHLIST,
        info: 'empty wishlist called'
    }
}

export const wishlist_to_cart = () => {
    return {
        type: WISHLIST_TO_CART,
        info: 'wishlist_to_cart action called'
    }
}