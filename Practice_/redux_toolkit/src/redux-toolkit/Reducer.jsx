import { BUY_MAGGIE, BUY_NOODLES } from "./Constant";

const initialValuesOfMaggie = {
    NumOfMaggie: 0
}

const initialValuesOfNoodles = {
    NumOfNoodles: 0
}

export const maggieReducer = (state = initialValuesOfMaggie, action) => {

    switch (action.type) {
        case BUY_MAGGIE:
            return {
                ...state,
                NumOfMaggie: state.NumOfMaggie + 1
            }

        default: return state
    }

}

export const noodlesReducer = (state = initialValuesOfNoodles, action) => {

    switch (action.type) {
        case BUY_NOODLES:
            return {
                ...state,
                NumOfNoodles: state.NumOfNoodles + 1
            }

        default: return state
    }

}