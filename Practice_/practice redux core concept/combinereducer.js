const redux = require('redux')
const createStore = redux.createStore

const combineReducer = redux.combineReducers
const applyMidleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


// constant 

const BUY_BURGER = "BUY_BURGER"
const BUY_DRINKS = "BUY_DRINKS"
const BUY_SANDWICH = 'BUY_SANDWICH'

// Redux Action 

function buy_burger() {
    return {
        type: BUY_BURGER,
        info: "this is burger"
    }
}
function buy_drinks() {
    return {
        type: BUY_DRINKS,
        info: "this is drinks"
    }
}
function buy_sandwich() {
    return {
        type: BUY_SANDWICH,
        info: "this is sandwich"
    }
}

// initialstate

const initialstate = {
    NumOfBurger: 12,
    NumOfDrinks: 10,
    NumOfSandwich: 10
}

// reducer

const burgerReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "BUY_BURGER": return {
            ...state,
            NumOfBurger: state.NumOfBurger - 1
        }

        default: return state
    }

}

const drinksReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "BUY_DRINKS": return {
            ...state,
            NumOfDrinks: state.NumOfDrinks - 1
        }

        default: return state
    }

}

const sandwichReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "BUY_SANDWICH": return {
            ...state,
            NumOfSandwich: state.NumOfSandwich - 1
        }

        default: return state
    }

}

// store

const rootReducer = combineReducer({
    burgerReducer, sandwichReducer, drinksReducer
})

const store = createStore(rootReducer, applyMidleware(logger))

console.log(store.getState())

store.subscribe(() => console.log(store.getState()))


store.dispatch(buy_drinks())
