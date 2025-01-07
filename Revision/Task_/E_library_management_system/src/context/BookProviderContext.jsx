import React, { useState } from 'react'
import Book_Context from './Bookcontext'

const BookProviderContext = ({ children }) => {
    const [book, setBook] = useState({})
    return (
        <div>
            <Book_Context.Provider value={{ book, setBook }}>
                {children}
            </Book_Context.Provider>
        </div>
    )
}

export default BookProviderContext
