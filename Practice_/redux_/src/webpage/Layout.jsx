import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Shop from './Shop'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} ></Route>
                    <Route path='/shop' element={<Shop />} ></Route>
                    <Route path='/cart' element={<Cart />} ></Route>
                    <Route path='/wishlist' element={<Wishlist />} ></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Layout