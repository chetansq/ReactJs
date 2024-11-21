const redux = require('redux')
const createStore = redux.createStore

// constant

const BUY_SWITCHBOARD = 'BUY_SWITCHBOARD'
const BUY_SWITCH = 'BUY_SWITCH'
const BUY_PLUG = 'BUY_PLUG'

// Redux Action

function buy_switchBoard() {
    return {
        type: BUY_SWITCHBOARD,
        info: "switchboard"
    }
}

function buy_switch() {
    return {
        type: BUY_SWITCH,
        info: "switch"
    }
}

function buy_plug() {
    return {
        type: BUY_PLUG,
        info: "plug"
    }
}

// initialstate 

const initialstate = {
    NumOfSwitchBoard: 20,
    NumOfSwitch: 15,
    NumOfPlug: 10
}

// Reducer

const SwitchBoradReducer = (state = initialstate, action) => {

    switch (action.type) {
        case "BUY_SWITCHBOARD": return {
            ...state,
            NumOfSwitchBoard: state.NumOfSwitchBoard - 1
        }

        default: return state
    }
}
const SwitchReducer = (state = initialstate, action) => {

    switch (action.type) {

        case "BUY_SWITCH": return {
            ...state,
            NumOfSwitch: state.NumOfSwitch - 1
        }

        default: return state
    }
}
const PlugReducer = (state = initialstate, action) => {

    switch (action.type) {

        case "BUY_PLUG": return {
            ...state,
            NumOfPlug: state.NumOfPlug - 1
        }

        default: return state
    }
}

// store

store = createStore(PlugReducer)
store = createStore(SwitchBoradReducer)
store = createStore(SwitchReducer)

console.log(store.getState())


store.subscribe(() => console.log(store.getState()))

store.dispatch(buy_switchBoard())
store.dispatch(buy_plug())
store.dispatch(buy_switch())
store.dispatch(buy_plug())
store.dispatch(buy_switchBoard())
store.dispatch(buy_switch())