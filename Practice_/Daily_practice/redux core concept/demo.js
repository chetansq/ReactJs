const redux = require('redux')
const createStore = redux.createStore

// constant

const GRAPS1 = 'GRAPS1'
const GRAPS2 = 'GRAPS2'

// redux function

function graps1() {
    return {
        type: GRAPS1,
        info: 'graps1'
    }
}

function graps2() {
    return {
        type: GRAPS2,
        info: 'graps2'
    }
}

// initialstate 

const initialstate = {
    graps1: 20,
    graps2: 10
}

// redux reducer

const GrapsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GRAPS1: return {
            ...state,
            graps1: state.graps1 - 1
        }
        case GRAPS2: return {
            ...state,
            graps2: state.graps2 * 20
        }

        default: return state
    }
}

const store = createStore(GrapsReducer)

console.log('Before', store.getState());

// subscribe

const unsubscribe = store.subscribe(() => console.log("After", store.getState()))

store.dispatch(graps1())
store.dispatch(graps2())
store.dispatch(graps1())

unsubscribe()