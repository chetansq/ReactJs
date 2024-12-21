import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ name, password })
    }
    return (
        <div className='flex flex-col w-1/3 gap-4'>
            <input type="text" className='border-2 border-black ' placeholder='user name'  value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className='border-2 border-black ' placeholder='password'  value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit} className='bg-blue-700 text-white my-2'>Submit</button>
        </div>
    )
}

export default Login
