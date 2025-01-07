import React, { useContext } from 'react'
import Book_Context from './context/Bookcontext'

const BookCard = () => {
    const { book } = useContext(Book_Context)
    return (
        <div>
            <p>  {book.title} </p>
            <p>  {book.author} </p>
            <p>  {book.status} </p>
        </div>
    )
}

export default BookCard
