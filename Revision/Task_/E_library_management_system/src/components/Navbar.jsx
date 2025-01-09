import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex justify-center gap-5 items-center p-5 bg-blue-600 text-white">

                    <NavLink to='/'> <li> Add Book </li> </NavLink>
                    <NavLink to='/bookcard'> <li> Book Card </li> </NavLink>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
