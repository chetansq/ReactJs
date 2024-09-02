import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RouterHook = () => {

    const navigateChange = useNavigate();
    return (
        <div>
            <button onClick={() => navigateChange('/')} >Click for <span className='bg-[red]'>Home</span></button>
        </div>
    )
}

export default RouterHook