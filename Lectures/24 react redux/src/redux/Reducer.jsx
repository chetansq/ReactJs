import { BUY_BURGER } from "./Constant";
// import { buy_burger } from "./Action";

const initalstate = {
    NumOfBurger: 0
}

const burgerReducer = (state = initalstate, action) => {

    switch (action.type) {
        case BUY_BURGER:
            console.log('buy-burger')
            return {
                NumOfBurger: state.NumOfBurger + 1
            }

        default: return state
    }
}

export default burgerReducer