import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='py-4 bg-[#212A31]'>
                <ul className='flex justify-center items-center text-white gap-6 '>
                    <li> <NavLink to='/' className='p-2'>Home</NavLink> </li>
                    <li> <NavLink to='/addexpense' className='p-2'>Add Expense</NavLink> </li>
                    <li> <NavLink to='/expenselist' className='p-2'>Expense List</NavLink> </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
