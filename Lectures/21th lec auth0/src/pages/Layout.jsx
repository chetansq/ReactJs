import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Shop from './Shop'
import Contact from './Contact'
import Login from './Login'
import Navbar from '../components/Navbar'
import Error from './Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Profile'


const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<AboutUs />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/error" element={<Error />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
