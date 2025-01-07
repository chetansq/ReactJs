import React from 'react'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import BookAdd from './BookAdd'
import BookCard from './BookCard'
import Navbar from '../components/Navbar'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route path='/' element={<BookAdd />} />
            <Route path='/bookcard' element={<BookCard />} />
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
