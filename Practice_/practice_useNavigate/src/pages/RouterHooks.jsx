import React from 'react'
import { useNavigate } from 'react-router-dom'

const RouterHooks = () => {
    const navigation = useNavigate()
    return (
        <div>
            <button onClick={() => navigation('/')}>click for home page</button>
        </div>
    )
}



export default RouterHooks


