import React, { useState } from 'react'
import UserContext from './User_context'

const Context_provider = ({ children }) => {

    const [user, setUser] = useState({})
    return (
        <div>
            <UserContext.Provider value={{ user, setUser }} >
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default Context_provider
