import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Cake, Choco } from './Action'




const Redux = () => {
    const data = useSelector(state => state)

    console.log("data", data);


    const dispatch = useDispatch();

    return (
        <div>
            <button className='btn mx-1' onClick={() => dispatch(Cake())}>Cake</button>
            <button className='btn mx-1' onClick={() => dispatch(Choco())}>Choco</button>
        </div>
    )
}

export default Redux
