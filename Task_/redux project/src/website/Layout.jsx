import React from 'react'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import BuyPage from './BuyPage'
import WishlistPage from './WishlistPage'
import CartPage from './CartPage'
import Navbar from './Navbar'
import Login from './Login'
import SignUp from './SignUp'
import Contact from './Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/product" element={<ProductPage />}></Route>
                    <Route path="/cart" element={<CartPage />}></Route>
                    <Route path="/buy" element={<BuyPage />}></Route>
                    <Route path="/wishlist" element={<WishlistPage />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>

                    <Route path="/error" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
