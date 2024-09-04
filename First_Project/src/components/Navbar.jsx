import React from 'react'
import Logo from '../assets/logo.svg'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <header className=' bg-slate-100'>
                <nav className='flex justify-between mx-[5%] py-5 '>
                    <div>
                        <a href="">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <ul className='flex gap-4'>

                        <li> <NavLink to='/'>Home</NavLink></li>
                        <li> <NavLink to='/shop'>Shop</NavLink></li>
                        <li> <NavLink to='product'>Products</NavLink></li>
                        <li> <NavLink to='page'>Pages</NavLink></li>
                        <li> <NavLink to='blog'>Blog</NavLink></li>
                        <li> <NavLink to='buynow'>Buy now</NavLink></li>

                    </ul>

                    <div>
                        <FaSearch />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
