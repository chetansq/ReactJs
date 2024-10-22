import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Shop from './components/Shop'
import About from './components/About'


const LocalstorageWithFormik = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/shop' element={<Shop />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default LocalstorageWithFormik
