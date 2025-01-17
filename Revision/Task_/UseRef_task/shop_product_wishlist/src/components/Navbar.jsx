import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <div>

            <div className='bg-slate-200 flex justify-around p-4 items-center'>
                <div>
                    <img src="https://reactrouter.com/_brand/react-router-stacked-color.png" alt="" className='h-20' />
                </div>
                <div>
                    <nav>
                        <ul className='flex gap-8'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><NavLink to='/product'>Product</NavLink></li>
                            <li><NavLink to='/cart'>Cart</NavLink></li>
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
