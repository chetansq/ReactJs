import React from 'react'
import Home from './Home'
import About from './About'
import Navbar from '../components/Navbar'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'
import Wishlist from './Wishlist'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const navList = createBrowserRouter([
    {
        path: '',
        element: <Navbar />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/about',
                element: <About />,
                // children: [

                //     {
                //         path: '/page/about',
                //         element: <AboutUs />
                //     }
                // ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/Wishlist',
                element: <Wishlist />
            },
        ]
    }
])

const Layout = () => {
    return (

        <div className=''>
            <RouterProvider router={navList}></RouterProvider>

        </div>
    )
}

export default Layout