const redux = require('redux')
const createStore = redux.createStore

//constant

// redux action

function bags() {
    return {
        type: "BAGS",
        info: 'first bags'
    }
}

// initialstate for redux

const initialstate = {
    NumOfBags: 10
}

// redux reducer

const BagReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'BAGS': return {
            ...state,
            NumOfBags: state.NumOfBags - 1
        }

        default: return state
    }
}


// redux store

const store = createStore(BagReducer)

console.log(store.getState());

store.subscribe(() => console.log(store.getState()))

store.dispatch(bags())
store.dispatch(bags())
