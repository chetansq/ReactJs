import { maggieReducer, noodlesReducer } from "./Reducer";
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import logger from "redux-logger";

import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    maggie: maggieReducer,
    noodles: noodlesReducer
})

export const Store = configureStore({
    reducer: rootReducer
}, applyMiddleware(logger))