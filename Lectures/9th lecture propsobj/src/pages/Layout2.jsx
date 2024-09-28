import React from 'react'
import { PageObj } from './Pageobj'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// const navList = createBrowserRouter([
//     {
//         path: '',
//         element: <Navbar />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/about',
//                 element: <AboutUs />
//             },
//             {
//                 path: '/cart',
//                 element: <Cart />
//             },
//             {
//                 path: '/shop',
//                 element: <Shop />
//             },
//             {
//                 path: '/contact',
//                 element: <Contact />
//             },
//             {
//                 path: '/login',
//                 element: <Login />
//             }
//         ]
//     }


// ])

const navList = createBrowserRouter([
    {
        path: '',
        element: PageObj.navbar,
        children: [
            {
                path: '/',
                element: PageObj.home
            },
            {
                path: '/about',
                element: PageObj.aboutus
            },
            {
                path: '/cart',
                element: PageObj.cart
            },
            {
                path: '/shop',
                element: PageObj.shop
            },
            {
                path: '/contact',
                element: PageObj.contact
            },
            {
                path: '/login',
                element: PageObj.login
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