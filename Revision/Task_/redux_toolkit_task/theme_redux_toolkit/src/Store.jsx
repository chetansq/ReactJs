import { configureStore } from "@reduxjs/toolkit"
import ThemeSlice from "./ThemeSlice"

export const store = configureStore({
    reducer: {
        Theme_: ThemeSlice
    }
})
