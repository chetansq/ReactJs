const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const reduxlogger = require('redux-logger')
const logger = reduxlogger.createLogger()

// redux store

const createStore = redux.createStore

// redux action

const buy_cake = () => {
    return {
        type: 'BUY_CAKE',
        info: 'first redux action'
    }
}

const buy_choco = () => {
    return {
        type: 'BUY_CHOCO',
        info: 'second redux action'
    }
}

// initialState

let initialState = [{
    cake: 10,
    choco: 20
}]


// reducer

const ItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return [{ ...state[0], cake: state[0].cake - 1 }]
        case 'BUY_CHOCO': return [{ ...state[0], choco: state[0].choco - 1 }]
        default: return state
    }
}

// create store

const store = createStore(ItemReducer, applyMiddleware(logger))

console.log('store', store);

console.log('inititalState', store.getState());

store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())

store.dispatch(buy_choco())
store.dispatch(buy_choco())
store.dispatch(buy_choco())

