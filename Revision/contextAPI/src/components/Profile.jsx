import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)

    return (
        <div>

            <h2 className="bg-slate-900 text-white text-center p-4 mb-6">This is profile page</h2>
            <span>  Name : {user.name}</span>
            <br />
            <span> Password : {user.password}</span>
            <br />
            <span>  Email : {user.email}</span>
            <br />
            <span>  Gender : {user.gender}</span>
        </div>
    )
}

export default Profile
