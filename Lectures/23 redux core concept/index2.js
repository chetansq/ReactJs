const redux = require('redux')
const createStore = redux.createStore
const { combineReducers } = require('redux')
const { applyMiddleware } = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// constant

const BUY_CHOCOLATE = 'BUY_CHOCOLATE'
const BUY_COLDRINKS = 'BUY_COLDRINKS'
const BUY_PIZZA = 'BUY_PIZZA'

// Redux Action

function buy_chocolate() {
    return {
        type: BUY_CHOCOLATE,
        info: "first redux action"
    }
}

function buy_coldrinks() {
    return {
        type: BUY_COLDRINKS,
        info: "second redux action"
    }
}

function buy_pizza() {
    return {
        type: BUY_PIZZA,
        info: "third redux action"
    }
}

// initialstate for redux

const initialstate = {
    NumOfChocolate: 20,
    NumOfColdrinks: 5,
    NumOfPizza: 3

}

// Redux Reducer

const ChocoReducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE: return {
            ...state,
            NumOfChocolate: state.NumOfChocolate - 1
        }

        default: return state
    }
}
const CakeReducer = (state = initialstate, action) => {
    switch (action.type) {

        case BUY_COLDRINKS: return {
            ...state,
            NumOfColdrinks: state.NumOfColdrinks - 1
        }

        default: return state
    }
}
const PizzaReducer = (state = initialstate, action) => {
    switch (action.type) {

        case BUY_PIZZA: return {
            ...state,
            NumOfPizza: state.NumOfPizza - 1
        }

        default: return state
    }
}

// redux store

const rootReducer = combineReducers({
    ChocoReducer, CakeReducer, PizzaReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(buy_chocolate())
store.dispatch(buy_coldrinks())
store.dispatch(buy_pizza())

unsubscribe()