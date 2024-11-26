import { burgerReducer, coldrinksReducer } from "./Reducer";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
// import { useSelector, useDispatch } from 'react-redux'

const rootReducer = combineReducers({
    burger: burgerReducer,
    coldrinks: coldrinksReducer
})

const Store = createStore(rootReducer, applyMiddleware(logger));



// const dispatch = useDispatch()

export default Store
