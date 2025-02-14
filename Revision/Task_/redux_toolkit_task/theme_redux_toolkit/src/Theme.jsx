import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Black_theme, White_theme } from './ThemeSlice';


const Theme = () => {
    const [toggle, setToggle] = useState(false);

    const black_ = useSelector(state => state.Theme_.black);
    const white_ = useSelector(state => state.Theme_.white);

    console.log("black", black_);
    console.log("white", white_);

    const dispatch = useDispatch();

    const ToggleBlack = () => {

        dispatch(Black_theme())
        setToggle(true)

    }
    const ToggleWhite = () => {

        dispatch(White_theme())
        setToggle(false)

    }

    return (
        <div className={`${toggle ? black_ : white_} h-screen`}>

            <button className='bg-blue-600 text-white py-1 px-4 rounded mx-1 my-3 hover:bg-white border hover:border-blue-600 hover:text-blue-600' onClick={ToggleBlack}>Dark</button>
            <button className='bg-blue-600 text-white py-1 px-4 rounded mx-1 my-3 hover:bg-white border hover:border-blue-600 hover:text-blue-600' onClick={ToggleWhite}>Light</button>
        </div >
    )
}

export default Theme