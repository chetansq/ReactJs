import { add_item } from "./Action";
import { ADD_ITEM } from "./Constant";
import { Data } from "../data/Data";

const initialvalue1 = 30
const initialvalue2 = 20

export const addReducer1 = (state = initialvalue1, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return state - 1
            break;

        default: return state
            break;
    }
}
export const addReducer2 = (state = initialvalue1, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return state - 1
            break;

        default: return state
            break;
    }
}
