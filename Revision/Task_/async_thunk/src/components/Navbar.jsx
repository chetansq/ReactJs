import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul className='flex justify-center gap-6 bg-[#2C3531] text-[#D1E1E2] py-3'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/shop"><li>Shop</li></NavLink>

                <NavLink to="/cart">
                    <li>Cart</li>
                </NavLink>
                <NavLink to="/wishlist"><li>Wishlist</li></NavLink> 
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar