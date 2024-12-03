import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between  items-center bg-slate-300 p-3'>
            <div className=''>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/15/49/shop-150362_1280.png" alt="redux" className='h-16' />
            </div>
            <ul className='flex w-1/2 gap-4 '>
                <li> <NavLink to='/' >Home</NavLink> </li>
                <li> <NavLink to='/shop' >Shop</NavLink> </li>
                <li> <NavLink to='/cart' >Cart</NavLink> </li>
                <li> <NavLink to='/wishlist' >Wishlist</NavLink> </li>
            </ul>
        </div>
    )
}

export default Navbar
