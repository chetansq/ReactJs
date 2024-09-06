import React from 'react'
import Logo from '../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink, Outlet } from 'react-router-dom';

const offCanvas = () => {
    console.log("offcanvas");
    return (
        <>
            <h1>hello</h1>
        </>
    )
}






const Navbar = () => {
    return (
        <div>
            {/* Header Section Start */}

            <header className=' bg-slate-100 '>
                <nav className='flex justify-between lg:mx-[5%] mx-3 py-5 items-center'>

                    <div className='relative lg:hidden flex items-center'>

                        <RiMenu2Fill className='text-xl font-semibold hover:duration-300 hover:text-red-600' onClick={offCanvas} />
                    </div>

                    <div className='text-center pl-4 max-md:p-0 '>
                        <NavLink to='/'>
                            <img src={Logo} alt="" className='h-4 sm:h-auto' />
                        </NavLink>

                    </div>

                    <ul className='flex gap-4 font-semibold text-lg max-lg:hidden'>
                        <li> <NavLink to='/'>Home</NavLink></li>
                        <li> <NavLink to='/shop'>Shop</NavLink></li>
                        <li> <NavLink to='product'>Products</NavLink></li>
                        <li > <NavLink to='page' className='flex place-items-center gap-1'>Pages <IoIosArrowDown className='relative top-0.5' /></NavLink> </li>
                        <li> <NavLink to='blog'>Blog</NavLink></li>
                        <li> <NavLink to='buynow'>Buy now</NavLink></li>

                    </ul>

                    <div className='flex gap-1 md:gap-3 text-lg *:*:duration-300 '>
                        <Link><IoSearch className='hover:text-red-600' /></Link>
                        <Link><FiUser className=' max-md:hidden hover:text-red-600' /></Link>
                        <Link><FaRegHeart className=' max-md:hidden hover:text-red-600' /></Link>
                        <Link><RiShoppingBag2Line className='hover:text-red-600' /></Link>
                    </div>
                </nav>
            </header>

            {/* Header Section End */}

            {/* Main Section Start */}
           
            {/* Main Section End */}
            <Outlet />
        </div>
    )
}

export default Navbar
