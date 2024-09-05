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
            <div className='bg-black h-1/2 w-1/2'>
                <h1>hello</h1>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <div>
            <header className=' bg-slate-100 '>
                <nav className='flex justify-between lg:mx-[5%] mx-3 py-5 items-center'>

                    <div onClick={offCanvas} className='lg:hidden'>
                        <RiMenu2Fill className='lg:hidden relative left-0 text-xl font-semibold hover:duration-300 hover:text-red-600' />
                    </div>
                    <div className='text-center'>
                        <NavLink to='/'>
                            <img src={Logo} alt="" />
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
            <Outlet />
        </div>
    )
}

export default Navbar
