import React from 'react'
import Home from './Home'
import About from './About'
import Navbar from '../components/Navbar'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'
import Wishlist from './Wishlist'
import Help from './Help'
import Faq from './Faq'

import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />

            <Route path='about' element={<About />} >
                <Route path='help' element={<Help />} />
                <Route path='faq' element={<Faq />} />
            </Route>

            <Route path='shop' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
            <Route path='contact' element={<Contact />} />
            <Route path='wishlist' element={<Wishlist />} />
        </Route>
    )
)

const Layout = () => {
    return (

        <div className=''>
            <RouterProvider router={router}></RouterProvider>

        </div>
    )
}

export default Layout