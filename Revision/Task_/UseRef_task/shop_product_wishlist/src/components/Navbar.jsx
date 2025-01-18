import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";

import { FaHeart } from "react-icons/fa";

import { CiShoppingCart } from "react-icons/ci";
import { NavLink, Outlet } from "react-router-dom"
import Wish_context from '../context/Context';


const Navbar = () => {

    const { wishData } = useContext(Wish_context)
    const { cartData } = useContext(Wish_context)

    return (
        <div>

            <div className='bg-slate-200 flex justify-around p-4 items-center'>
                <div>
                    <img src="https://reactrouter.com/_brand/react-router-stacked-color.png" alt="" className='h-20' />
                </div>
                <div>
                    <nav>
                        <ul className='flex items-center gap-8'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><NavLink to='/product'>Product</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            <li><NavLink to='/cart' className='flex relative text-xl'>
                                <CiShoppingCart className='text-2xl' />
                                <span className='absolute top-[-10px] right-[-8px] text-[10px] h-4 w-4 rounded-full items-center flex justify-center bg-red-500 text-white'>
                                    {
                                        cartData.length
                                    }
                                </span>
                            </NavLink></li>
                            <li><NavLink to='/wishlist'>
                                {
                                    wishData.length == 0 ? <CiHeart className='text-2xl' /> : <FaHeart className='text-2xl text-red-600' />
                                }


                            </NavLink></li>
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
