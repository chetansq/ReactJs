const redux = require('redux')

// redux store

const createStore = redux.createStore

// redux action

const buy_cake = () => {
  return {
    type: 'BUY_CAKE',
    info: 'first cake action'
  }
}
const buy_choco = () => {
  return {
    type: 'BUY_CHOCO',
    info: 'first choco action'
  }
}
const buy_milk = () => {
  return {
    type: 'BUY_MILK',
    info: 'first choco action'
  }
}



// initialState

let initialState = {
  cake: 10,
  choco: 5,
  milk: 15
}


// reducer

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_CAKE': return state.cake - 1
    case 'BUY_CHOCO': return state.choco - 1
    case 'BUY_MILK': return state.milk - 1
    default: return state
  }
}

// create store

const store = createStore(ItemReducer)

console.log('store', store);

console.log('inititalState', store.getState());

store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch("cake", buy_cake())
store.dispatch("choco", buy_choco())
store.dispatch("milk", buy_milk())


