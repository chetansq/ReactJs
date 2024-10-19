import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-around p-3 bg-slate-200 font-serif text-slate-900 text-lg '>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png" className='h-14' alt="" />
                <ul className='flex justify-center gap-6 p-3 bg-slate-200 font-serif text-slate-900 text-lg '>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/shop'>Shop</NavLink></li>
                </ul>
                <ul className='flex justify-between gap-6 p-3 bg-slate-200 font-serif text-slate-900 text-lg '>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>SignUp</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
