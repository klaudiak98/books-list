import { useState, useEffect } from "react"
import axios from 'axios'
import NewBookForm from './components/NewBookForm'
import BooksList from './components/BooksList'

const App = () => {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

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

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BooksList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <NewBookForm onSubmit={createBook} />
        </div>
    )
}

export default App