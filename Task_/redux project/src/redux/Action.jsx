import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST } from "./Constant";

export const add_to_cart = () => {
    return {
        type: ADD_TO_CART,
        info: 'add to cart called'
    }
}
export const remove_to_cart = () => {
    return {
        type: REMOVE_TO_CART,
        info: 'remove to cart called'
    }
}
export const empty_cart = () => {
    return {
        type: EMPTY_CART,
        info: 'empty cart called'
    }
}
export const add_to_wishlist = () => {
    return {
        type: ADD_TO_WISHLIST,
        info: 'add to wishlist called'
    }
}
export const remove_to_wishlist = () => {
    return {
        type: REMOVE_TO_WISHLIST,
        info: 'remove to wishlist called'
    }
}
export const empty_wishlist = () => {
    return {
        type: EMPTY_WISHLIST,
        info: 'empty wishlist called'
    }
}