import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = 10

const ItemSlice = createSlice({
    name: 'Item',
    initialState,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
})
// console.log(ItemSlice);

export const { increment, decrement } = ItemSlice.actions

export default ItemSlice.reducer

export const store = configureStore({
    reducer: {
        Item: ItemSlice.reducer
    }
})
