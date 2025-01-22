import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../page/Home'
import AddExpense from '../components/AddExpense'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/addexpense' element={<AddExpense />} />
        </Route>
    )
)
const Layout = () => {
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    )
}

export default Layout
