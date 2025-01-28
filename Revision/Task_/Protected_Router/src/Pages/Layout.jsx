import React from 'react'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BookDetails from './BookDetails'
import BookUpdate from './BookUpdate'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Contact from './Contact'
import Login from './Login'
import Profile from './Profile'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />

            <Route path='/profile' element={<Profile />} />
            <Route path='/bookdetails' element={<BookDetails />} />
            <Route path='/bookupdate' element={<BookUpdate />} />


        </Route>
    )
)

const Layout = () => {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default Layout
