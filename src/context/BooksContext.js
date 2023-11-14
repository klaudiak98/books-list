import { createContext, useState } from "react";
import axios  from "axios";

const BooksContext = createContext();

const Provider = ({children}) => {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

     const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })

        setBooks([...books, response.data])
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const filteredBooks = books.filter((book) => book.id !== id)
        setBooks(filteredBooks)
    }

    const editBookById = async(id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const updatedBooksList = books.map((book) => (book.id === id ? {...book, ...response.data} : book))
        setBooks(updatedBooksList)
    }

    return <BooksContext.Provider 
        value={{
            books,
            deleteBookById,
            editBookById,
            createBook,
            fetchBooks
        }}>
        {children}
    </BooksContext.Provider>
}

export {Provider}
export default BooksContext;