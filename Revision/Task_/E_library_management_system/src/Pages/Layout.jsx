import React from 'react'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import BookAdd from './BookAdd'
import BookCard from './BookCard'
import Navbar from '../components/Navbar'
import BookDetails from './BookDetails'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route path='/' element={<BookAdd />} />
            <Route path='/bookcard' element={<BookCard />} />
            <Route path='/bookdetails' element={<BookDetails />} />
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
