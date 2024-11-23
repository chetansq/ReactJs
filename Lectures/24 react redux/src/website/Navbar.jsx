import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <div className='bg-slate-200 flex justify-around p-4 items-center'>
            <div>
                <img src="https://reactrouter.com/_brand/react-router-stacked-color.png" alt="" className='h-20' />
            </div>

            <div>
                <nav>
                    <ul className='flex gap-8'>
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/product'>Product</NavLink></li>
                        <li><NavLink to='/cart'>Cart</NavLink></li>
                        <li><NavLink to='/buy'>Shop</NavLink></li>
                        <li><NavLink to='/wishlist'>wishlist</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
