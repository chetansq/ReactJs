import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice"
import cartReducer from "./Cart_Slice"

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export default Store