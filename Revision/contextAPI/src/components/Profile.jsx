import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h2>This is profile page</h2>
            <span> Profile Name : {user.name}</span>
            {/* <span> Profile password : {user.passwrod}</span> */}
        </div>
    )
}

export default Profile
