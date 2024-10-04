import React from 'react'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Shop from './Shop'
import Contact from './Contact'
import Login from './Login'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
