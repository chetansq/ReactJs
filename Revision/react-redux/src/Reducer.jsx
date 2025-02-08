const initialState = {
    cake: 10,
    choco: 11,
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE": return {
            ...state, cake: state.cake - 1
        }

        case "BUY_CHOCO": return {
            ...state, choco: state.choco - 1
        }

        default: return state
    }
}


export default Reducer