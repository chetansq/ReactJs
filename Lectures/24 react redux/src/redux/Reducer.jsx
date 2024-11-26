import { BUY_BURGER, BUY_COLDRINKS } from "./Constant";
// import { buy_burger } from "./Action";

// const initalstate = {
//     NumOfBurger: 0
// }

const initalstateofburger = {
    NumOfBurger: 0
}

const initalstateofcoldrinks = {
    NumOfColdrinks: 0
}

export const burgerReducer = (state = initalstateofburger, action) => {

    switch (action.type) {
        case BUY_BURGER:
            console.log('buy-burger')
            return {
                ...state,
                NumOfBurger: state.NumOfBurger + 1
            }

        default: return state
    }
}

export const coldrinksReducer = (state = initalstateofcoldrinks, action) => {

    switch (action.type) {
        case BUY_COLDRINKS:
            console.log('buy-coldrinks')
            return {
                ...state,
                NumOfColdrinks: state.NumOfColdrinks + 1
            }

        default: return state
    }
}

