import React, { useState } from 'react'
import UserContext from './UserConext'

const UserContextProvider = ({ children }) => {

    const [theme, setTheme] = useState()
    const [value, setValue] = useState(false)
    return (
        <div>
            <UserContext.Provider value={{ setTheme, value, setValue }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default UserContextProvider
