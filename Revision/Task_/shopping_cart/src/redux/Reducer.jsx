import { ADD_ITEM, DELETE_ITEM } from "./Constant";

import { Data } from "../data/Data";

const initialState = {
    initialData: Data,
    addedData: [],
}


export const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log("state", state);
            return {
                ...state, addedData: [...state.addedData, action.payload]
            }

        case DELETE_ITEM:

            const newData = state.addedData.filter((state) => state.id !== action.payload.id)
            state.addedData = newData
            return [...state.addedData]

        default: return state
    }
}

