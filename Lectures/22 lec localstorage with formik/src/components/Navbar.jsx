import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-between p-3 bg-slate-200 font-serif text-slate-900 text-lg '>
                    <li><NavLink to='/'>Home</NavLink ></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>SignUp</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
