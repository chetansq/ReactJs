import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className=' flex bg-slate-200 items-center justify-around p-4'>
            <div>
                <img src='https://reactrouter.com/_brand/react-router-stacked-color.png' alt="" className='h-20' />
            </div>
            <div>
                <nav>
                    <ul className='flex gap-8 '>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar