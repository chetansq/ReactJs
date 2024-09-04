import React from 'react'
import Logo from '../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink, Outlet } from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <header className=' bg-slate-100'>
                <nav className='flex justify-between lg:mx-[5%] mx-3 py-5 items-center'>

                    <RiMenu2Fill className='lg:hidden relative left-0 text-xl font-semibold hover:duration-300 hover:text-red-600' />
                    <div className='text-center'>
                        <a href="">
                            <img src={Logo} alt=""  />


                        </a>
                    </div>

                    <ul className='flex gap-4 font-semibold text-lg max-lg:hidden'>
                        <li> <NavLink to='/'>Home</NavLink></li>
                        <li> <NavLink to='/shop'>Shop</NavLink></li>
                        <li> <NavLink to='product'>Products</NavLink></li>
                        <li > <NavLink to='page' className='flex place-items-center gap-1'>Pages <IoIosArrowDown className='relative top-0.5' /></NavLink> </li>
                        <li> <NavLink to='blog'>Blog</NavLink></li>
                        <li> <NavLink to='buynow'>Buy now</NavLink></li>

                    </ul>

                    <div className='flex gap-3 text-lg '>
                        <Link><IoSearch className='nav-icon-hover' /></Link>
                        <Link><FiUser className='nav-icon-hover max-md:hidden' /></Link>
                        <Link><FaRegHeart className='nav-icon-hover max-md:hidden' /></Link>
                        <Link><RiShoppingBag2Line className='nav-icon-hover' /></Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default Navbar
