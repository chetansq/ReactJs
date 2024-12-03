import { combineReducers } from 'redux'
import { addToWishlistreducer } from './WishlistReducer'
import { cartToWishlistReducer } from './WishlistReducer'
import { cartReducer } from './CartReducer'
import { productReducer } from './ProductReducer'
export const rootReducer = combineReducers({

    cart: cartReducer,
    product:productReducer,
    addwishlist: addToWishlistreducer,
    cartwishlist: cartToWishlistReducer
}
)