import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Shop from './Shop'
import Cart from './Cart'
import Wishlist from './Wishlist'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>


            <Route path='shop' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
            <Route path='wishlist' element={<Wishlist />} />
        </Route>
    )
)

const Layout = () => {
    return (

        <div className=''>
            <RouterProvider router={router}></RouterProvider>

        </div>
    )
}

export default Layout