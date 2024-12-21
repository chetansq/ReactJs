import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')

    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()

        setUser({ name, password, email })



    }


    return (
        <div className='flex flex-col w-full gap-4 items-center'>
            <input type="text" className='border-2 border-black ' placeholder='user name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className='border-2 border-black ' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="email" className='border-2 border-black ' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <div>
                <p>Gender</p>
                male <input type="radio" className='border-2 border-black ' value={gender} name='male' />


                female
                <input type="radio" className='border-2 border-black ' value={gender} name='female' />
            </div>


            <button onClick={handleSubmit} className='bg-blue-700 text-white my-2 p-2 border-2 hover:bg-white hover:text-blue-800 hover:border-blue-800'>Submit</button>
        </div>
    )
}

export default Login
