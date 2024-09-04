import React from 'react'
import Index from '../pages/Index'
import Shop from '../pages/Shop'
import Products from '../pages/Products'
import Blog from '../pages/Blog'
import Buynow from '../pages/Buynow'
import Pages from '../pages/Pages'
import Navbar from '../components/Navbar'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const navList = createBrowserRouter([
    {
        path: '',
        element: <Navbar />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/product',
                element: <Products />
            },
            {
                path: '/page',
                element: <Pages />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/buynow',
                element: <Buynow />
            },
        ]
    }
])

const Layout = () => {
    return (

        <div>
            <RouterProvider router={navList}></RouterProvider>

        </div>
    )
}

export default Layout