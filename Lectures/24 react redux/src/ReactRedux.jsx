import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy_burger,buy_coldrinks } from "./redux/Action";

const ReactRedux = () => {

    const data1 = useSelector(state => state.burger.NumOfBurger)
    const data2 = useSelector(state => state.coldrinks.NumOfColdrinks)
    console.log('data 1', data1);
    console.log('data 2', data2);


    const dispatch = useDispatch()
    return (

        <div>
            <p className='bg-green-800 text-white font-black text-3xl text-center'>react Redux</p>
            <p className='p-2'>
                {data1}
            </p>

            <button onClick={() => dispatch(buy_burger())} className='bg-slate-800 text-white p-2 m-2 border-white border-2 ring-2  rounded hover:bg-white hover:text-slate-800 hover:border-slate-800 hover:ring-0'>click for burger</button>
          
            <p className='p-2'>
                {data2}
            </p>

            <button onClick={() => dispatch(buy_coldrinks())} className='bg-slate-800 text-white p-2 m-2 border-white border-2 ring-2  rounded hover:bg-white hover:text-slate-800 hover:border-slate-800 hover:ring-0'>click for coldrinks</button>
        </div>
    )
}

export default ReactRedux
