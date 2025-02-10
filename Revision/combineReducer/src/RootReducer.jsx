import { combineReducers } from "redux";
import { addReducer1, addReducer2 } from "./Reducer";

export const rootReducer = combineReducers({
    addReducer1: addReducer1,
    addReducer2: addReducer2
})