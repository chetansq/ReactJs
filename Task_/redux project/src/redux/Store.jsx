import RootReducer from "./RootReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore(RootReducer, applyMiddleware(logger));

export default Store;