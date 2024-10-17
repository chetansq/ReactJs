import React from 'react'
import { NavLink , Link  } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <div className='bg-slate-200 flex justify-around p-4 items-center'>
            <div>
                <img src="https://cdn.vectorstock.com/i/500p/63/58/fast-food-emblem-vector-17286358.jpg" alt="" className='h-20 rounded-full shadow-black shadow-2xl' />
            </div>

            <div>
                <nav>
                    <ul className='flex gap-8'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/cart'>Cart</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>


                        {
                            isAuthenticated ? (
                                <div className="flex gap-5">
                                    <li>
                                        <NavLink to='/profile'>
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Link>
                                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                        </Link>
                                    </li>

                                </div>
                            ) : (

                                <li><NavLink to='/login' onClick={() => loginWithRedirect()}>Login</NavLink></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
