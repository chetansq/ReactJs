import React from 'react'
import { Home } from './Home'
import { Shop } from './Shop'
import { Cart } from './Cart'

import { ContactPageOne } from './Contact'
import Login from './Login'
import { AboutUs } from './AboutUs'
// import Navbar from '../components/Navbar'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Product from './Product'

const navbarList = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children:
            [

                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <AboutUs />
                },
                {
                    path: '/cart',
                    element: <Cart />
                },
                {
                    path: '/contact',
                    element: <ContactPageOne />
                },
                {
                    path: '/shop',
                    element: <Shop />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/product',
                    element: <Product />
                },
            ]

    },



])

const Layout2 = () => {
    return (
        <div>
            <RouterProvider router={navbarList}> </RouterProvider>
        </div>
    )
}

export default Layout2
