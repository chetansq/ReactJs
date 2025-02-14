import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    black: "bg-black",
    white: "bg-white"
}

const ThemeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        Black_theme: state => state.black = 'bg-black',
        White_theme: state => state.white = 'bg-white'
    }
})
// console.log(ThemeSlice);

export const { Black_theme, White_theme } = ThemeSlice.actions

export default ThemeSlice.reducer

import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        Theme_: ThemeSlice.reducer
    }
})