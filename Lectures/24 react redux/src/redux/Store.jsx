import burgerReducer from "./Reducer";
import { createStore } from "redux";
// import { useSelector, useDispatch } from 'react-redux'

const Store = createStore(burgerReducer);

// const dispatch = useDispatch()

export default Store
