import React from 'react'
import Logo from '../assets/logo.svg'


const Index = () => {
    return (
        <div>
            <header className=' bg-slate-100'>
                <nav className='flex justify-between mx-[5%] py-5 '>
                    <div>
                        <a href="">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className='flex gap-4'>

                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">Products</a>
                        <a href="">Pages</a>
                        <a href="">Blog</a>

                        <a href="">Buy now</a>
                    </div>

                    <div>
                        <input type="search" placeholder='search' />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Index
