import React, { useContext } from 'react'
import User_Context from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {

    const { isAuth } = useContext(User_Context)

    return (
        <div>
            {
                isAuth ? children : <Navigate to="/login"></Navigate>
            }
        </div>
    )
}

export default ProtectedRoutes
