import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from './ItemSlice';



const Item = () => {

    const getItem = useSelector(state => state.Item);
    const dispatch = useDispatch();

    return (
        <div>
            <p className='bg-blue-700 text-white'>
                {
                    getItem
                }
            </p>

            <button className='bg-blue-600 text-white py-1 px-4 rounded mx-1 my-3 hover:bg-white border hover:border-blue-600 hover:text-blue-600' onClick={() => dispatch(increment())}>Increment</button>
            <button className='bg-blue-600 text-white py-1 px-4 rounded mx-1 my-3 hover:bg-white border hover:border-blue-600 hover:text-blue-600' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Item