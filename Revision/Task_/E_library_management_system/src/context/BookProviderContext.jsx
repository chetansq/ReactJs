import React, { useState } from 'react'
import Book_Context from './Bookcontext'

const BookProviderContext = ({ children }) => {
    const [book, setBook] = useState([])
    console.log('book provider', book);

    let booklist = [...book]

    return (
        <div>
            <Book_Context.Provider value={{ booklist, setBook }}>
                {children}
            </Book_Context.Provider>
        </div>
    )
}

export default BookProviderContext
