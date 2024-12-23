import React, { useContext, useState } from 'react'
import UserContext from '../context/User_context'

const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const on_submit = (e) => {
        e.preventDefault()
        setUser({ name, password })

    }

    return (
        <div>
            <p className='bg-slate-900 text-white text-xl text-center p-4'>|| This is Login ||</p>

            <div className=' flex flex-col   gap-4 my-4 items-center'>
                <input type="text" className='border-2 border-black p-1' name="" id="" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="text" className='border-2 border-black p-1' name="" id="" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={on_submit} className='bg-blue-700 text-white w-fit px-2 py-1 rounded'>submit</button>
            </div>
        </div>

    )
}

export default Login
