import { rootReducer } from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit'
export const Store = configureStore({ reducer: rootReducer })

console.log('store', Store);
