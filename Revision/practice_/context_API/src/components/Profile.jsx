import React, { useContext } from 'react'
import UserContext from '../context/User_context'

const Profile = () => {

    const { user } = useContext(UserContext)

    return (
        <div>
            <p className='bg-slate-700 text-white text-xl text-center p-4'>|| This is profile ||</p>

            <span>  Name : {user.name}</span>
            <br />
            <span> Password : {user.password}</span>
            <br />
        </div>
    )
}

export default Profile
