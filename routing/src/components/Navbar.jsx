import React from 'react'
import reactImg from '../assets/react.svg'

const Navbar = () => {
    return (
        <div className=' flex bg-slate-200 items-center justify-between'>
            <div>
                <img src={reactImg} alt="" className='h-20' />
            </div>
            <div>
                <nav>
                    <ul className='flex gap-6 '>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar