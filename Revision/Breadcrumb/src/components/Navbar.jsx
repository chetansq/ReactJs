import React from 'react'

import { Link, NavLink, Outlet } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const Navbar = () => {
    return (
        <div>


            <header className='bg-slate-100'>
                <nav className='  w-full  flex justify-between mx-3 lg:mx-0 py-5 items-center  '>

                    <ul className='flex gap-4 font-semibold text-lg '>
                        <li> <NavLink to='/'>Home</NavLink></li>
                        <li> <NavLink to='/shop'>Shop</NavLink></li>
                        <li> <NavLink to='/about'>About</NavLink></li>
                        <li> <NavLink to='/contact'>Contact</NavLink></li>
                        <li> <NavLink to='/cart'>Cart</NavLink></li>
                        <li> <NavLink to='/wishlist'>Wishlist</NavLink></li>
                    </ul>

                </nav>
            </header>


            <Breadcrumb />
            <Outlet />
        </div>
    )
}

export default Navbar


