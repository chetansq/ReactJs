const redux = require('redux')
const createStore = redux.createStore
const {combineReducers} = require('redux')
const {applyMiddleware} = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// constant

const COMPUTER = 'COMPUTER'
const MOUSE = 'MOUSE'
const KEYBOARD = "KEYBOARD"

// redux action

function computer() {
    return {
        type: COMPUTER,
        info: "computer"
    }
}

function mouse() {
    return {
        type: MOUSE,
        info: "mouse"
    }
}

function keyboard() {
    return {
        type: KEYBOARD,
        info: "keyboard"
    }
}

// initialState

const initialstate = {
    computer: 30,
    mouse: 20,
    keyboard: 10
}
// reducer

const ComputerReducer = (state = initialstate, action) => {
    switch (action.type) {
        case COMPUTER: return {
            ...state,
            computer: state.computer - 1
        }

        default: return state
    }
}
const MouseReducer = (state = initialstate, action) => {
    switch (action.type) {
        case MOUSE: return {
            ...state,
            mouse: state.mouse - 1
        }

        default: return state
    }
}
const KeyboardReducer = (state = initialstate, action) => {
    switch (action.type) {
        case KEYBOARD: return {
            ...state,
            keyboard: state.keyboard - 1
        }

        default: return state
    }
}
const rootReducer = combineReducers(
    {
        ComputerReducer, MouseReducer, KeyboardReducer
    }
)
const store = createStore(rootReducer, applyMiddleware(logger))

console.log('before', store.getState());

const unsubscribe = store.subscribe(() => console.log('after',store.getState()))

store.dispatch(computer())
store.dispatch(mouse())
store.dispatch(keyboard())

unsubscribe()