import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <p className='heading '>This is about page</p>
            <Link to='about/login'>Login</Link>
            <Link to='about/register'>Register</Link>
            <Outlet />
        </div>
    )
}

export default About
