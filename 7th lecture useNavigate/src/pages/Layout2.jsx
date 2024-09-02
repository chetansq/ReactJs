import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Shop from './Shop'
import Contact from './Contact'
import Login from './Login'
import Navbar from '../components/Navbar'
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
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }


])
const Layout2 = () => {
    return (
        <div>

            <RouterProvider router={navList}></RouterProvider>
        </div>
    )
}

export default Layout2