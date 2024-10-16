import React from 'react'
import { Link } from 'react-router-dom'
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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>


                        {
                            isAuthenticated ? (
                                <div className="flex gap-5">
                                    <li>
                                        <Link to='/profile'>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                        </Link>
                                    </li>

                                </div>
                            ) : (

                                <li><Link to='/login' onClick={() => loginWithRedirect()}>Login</Link></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
