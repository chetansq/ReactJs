import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa";

import { IoHeartCircle } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';


const Navbar = () => {


    const cart_data_length = useSelector(state => state.cart)

    const wishlist_data1_length = useSelector((state) => state.wishlist.productWish)
    const wishlist_data2_length = useSelector((state) => state.wishlist.cartWish)

    const data_length = wishlist_data1_length.concat(wishlist_data2_length);


    return (
        <div className='bg-slate-200 flex justify-around p-4 items-center'>
            <div>
                <img src="https://redux.js.org/img/redux.svg" alt="" className='h-20 w-20' />
            </div>

            <div>
                <nav className='flex gap-20'>
                    <ul className='flex gap-8'>
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/product'>Product</NavLink></li>
                        <li><NavLink to='/buy'>Buy</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>

                    <ul className='flex items-center gap-4'>
                        <li><NavLink to='/cart' className='flex relative text-xl'>
                            <FaShoppingCart />
                            <span className='absolute top-[-10px] right-[-8px] text-[10px] h-4 w-4 rounded-full items-center flex justify-center bg-red-500 text-white'>
                                {
                                    cart_data_length.length
                                }
                            </span>
                        </NavLink></li>

                        <li><NavLink to='/wishlist' className='text-lg' >
                            <div>
                                <span className=''>
                                    {
                                        data_length.length
                                            ?
                                            <IoHeartCircle className='text-blue-500 rounded-full text-2xl' />
                                            :
                                            <IoHeartCircleOutline className='text-black rounded-full text-2xl' />

                                        // color ? (<IoHeartCircle className='active' />)
                                        //     : (<IoHeartCircle className='text-blue-600  ' />)
                                    }
                                </span>
                            </div>
                        </NavLink></li>
                    </ul>

                    <ul className='flex gap-3'>
                        <li><NavLink to='/signup'>SignUp</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
