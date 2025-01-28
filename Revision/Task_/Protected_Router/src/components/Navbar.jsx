import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import User_Context from "../context/UserContext";
import React from 'react'

const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(User_Context)
    return (
        <div className=" relative">
            <nav className="  sticky top-0">
                <ul className="flex  justify-center gap-5 items-center p-5 bg-blue-600 text-white">

                    <li> <NavLink to='/'>Home</NavLink></li>
                    <li> <NavLink to='/about'>About</NavLink></li>
                    <li> <NavLink to='/shop'>Shop</NavLink></li>
                    <li> <NavLink to='/cart'>Cart</NavLink></li>
                    <li> <NavLink to='/wishlist'>Wishlist</NavLink></li>
                    <li> <NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/profile'> Profile </NavLink> </li>

                    <li>  {
                        isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> :
                            <NavLink to="login">Login</NavLink>
                    }</li>
                </ul>
            </nav>
            <Outlet />
        </div >
    )
}

export default Navbar
