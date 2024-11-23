import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy_burger } from "./redux/Action";

const ReactRedux = () => {

    const data = useSelector(state => state.NumOfBurger)
    console.log('data ', data);


    const dispatch = useDispatch()
    return (

        <div>
            <p className='bg-green-800 text-white font-black text-3xl text-center'>react Redux</p>
            <p className='p-2'>
                {data}
            </p>

            <button onClick={() => dispatch(buy_burger())} className='bg-slate-800 text-white p-2 m-2 border-white border-2 ring-2  rounded hover:bg-white hover:text-slate-800 hover:border-slate-800 hover:ring-0'>click for burger</button>
        </div>
    )
}

export default ReactRedux
