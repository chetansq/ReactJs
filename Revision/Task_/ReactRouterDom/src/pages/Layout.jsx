import React from 'react'
import Home from './Home'
import About from './About'
import Navbar from '../components/Navbar'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'
import Wishlist from './Wishlist'
import Error from './Error'
import Login from './Login'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Register from './Register'

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

                // Nested Routes  

                path: '/about',
                element: <About />,
                children: [

                    {
                        path: 'about/login',
                        element: <Login />
                    },
                    {
                        path: 'about/register',
                        element: <Register />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/Wishlist',
                element: <Wishlist />
            },

            // Error page (404)
            {
                path: '*',
                element: <Error />
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