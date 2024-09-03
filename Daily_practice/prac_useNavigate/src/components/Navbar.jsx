import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='bg-slate-300 '>
            <div className='flex justify-around items-center'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPE9VD7hC5m5iUcMPpHnJWJj37QdoVWgzLsg&s" alt="logo" className='rounded-full h-24' />
                </div>
                <div>
                    <nav>
                        <ul className='flex gap-5'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>AboutUs</NavLink></li>
                            <li><NavLink to='/cart'>Cart</NavLink></li>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar
