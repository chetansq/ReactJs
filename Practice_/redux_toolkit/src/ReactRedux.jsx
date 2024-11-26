import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy_maggie, buy_noodles } from './redux-toolkit/Action'


const ReactRedux = () => {

    const data1 = useSelector(state => state.maggie.NumOfMaggie)
    const data2 = useSelector(state => state.noodles.NumOfNoodles)

    console.log("data 1", data1);
    console.log("data 2", data2);


    const dispatch = useDispatch()
    return (
        <div className='flex w-[50% 50%] justify-center items-center gap-4 m-4'>
            <div className='flex flex-col justify-center items-center '>
                <img src='https://imgmedia.lbb.in/media/2019/06/5cf5f4a6ba9ec40f8a3ca480_1559622822195.jpg' alt="Maggie" className=' w-[45%]'/>
                {data1}

                <button  onClick={() => dispatch(buy_maggie())} className='bg-slate-800 text-white ring-1 p-2 rounded-xl'>Add Maggie</button>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <img src="https://www.devourdinner.com/wp-content/uploads/2018/04/Teriyaki-Noodles_Devour-Dinner-101.jpg" alt="noodles" />
                {data2}
                <button  onClick={() => dispatch(buy_noodles())} className='bg-slate-800 text-white ring-1 p-2 rounded-xl'>Add Noodles</button>
            </div>
        </div>
    )
}

export default ReactRedux
