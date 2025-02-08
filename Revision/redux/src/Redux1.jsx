import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createStore } from "redux"

const initialState = {
    cake: 10,
    choco: 11,
}

const cake = () => {
    return {
        type: "BUY_CAKE"
    }
}
const choco = () => {
    return {
        type: "BUY_CHOCO"
    }
}


const reducer = (state = initialState, action) => {
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


const Redux = () => {
    const data = useSelector(state => state)

    console.log("data", data);


    const dispatch = useDispatch();

    return (
        <div>
            <button className='btn' onClick={() => dispatch(cake())}>Cake</button>
            <button className='btn' onClick={() => dispatch(choco())}>Choco</button>
        </div>
    )
}

export default Redux

export const store = createStore(reducer)