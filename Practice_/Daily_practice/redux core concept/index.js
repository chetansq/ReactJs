const redux = require('redux')
const createStore = redux.createStore

// constant

const APPLE = 'APPLE'

// redux function

function apple() {
    return {
        type: APPLE,
        info: 'apple'
    }
}

// initialvalues for redux

const initialstate = {
    apple: 10
}

// redux reducer

const AppleReducer = (state = initialstate, action) => {
    switch (action.type) {
        case APPLE: return {
            apple: state.apple - 1
        }

        default: return state
    }
}

const store = createStore(AppleReducer)

console.log('before :', store.getState());

const unsubscribe = store.subscribe(() => console.log('after :', store.getState()))

store.dispatch(apple())

unsubscribe() 