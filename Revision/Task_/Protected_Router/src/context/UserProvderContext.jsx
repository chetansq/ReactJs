import React, { useState } from 'react'

import User_Context from './UserContext'
const UserProviderContext = ({ children }) => {
    const [data, setData] = useState([])
    const [singleBook, setSingleBook] = useState([])
    const [edit, setEdit] = useState({})

    const [isAuth, setIsAuth] = useState(false)

    console.log('book provider', data);

    let datalist = [...data]

    return (
        <div>
            <User_Context.Provider value={{ datalist, setData, singleBook, setSingleBook, edit, setEdit, isAuth, setIsAuth }}>
                {children}
            </User_Context.Provider>
        </div>
    )
}

export default UserProviderContext
