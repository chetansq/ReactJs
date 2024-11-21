const redux = require('redux')
const createStore = redux.createStore

// constant

const PC = 'PC'
const KEYBOARD = 'KEYBOARD'
const MOUSE = 'MOUSE'

// Redux Action

function pc() {
    return {
        type: PC,
        info: "pc"
    }
}

function keyboard() {
    return {
        type: KEYBOARD,
        info: "keyboard"
    }
}

function mouse() {
    return {
        type: MOUSE,
        info: "mouse"
    }
}

// initialstate

const initialstate = {
    NumOfPc: 20,
    NumOfKeyboard: 20,
    NumOfMouse: 5
}


// Redux Reducer

const NumReducer = (state = initialstate, action) => {
    switch (action.type) {
        case PC: return {
            ...state,
            NumOfPc: state.NumOfPc - 1
        }

        case KEYBOARD: return {
            ...state,
            NumOfKeyboard: state.NumOfKeyboard - 1
        }

        case MOUSE: return {
            ...state,
            NumOfMouse: state.NumOfMouse - 1
        }

        default: return state
    }
}

// redux store

const store = createStore(NumReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(pc())
store.dispatch(keyboard())
store.dispatch(mouse())
store.dispatch(pc())
store.dispatch(keyboard())
store.dispatch(mouse())