import { useState } from "react"
import NewBookForm from './components/NewBookForm'
import BooksList from './components/BooksList'

const App = () => {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        setBooks([...books, {id: Math.round(Math.random() * 9999), title}])
    }

    const deleteBookById = (id) => {
        const filteredBooks = books.filter((book) => book.id !== id)
        setBooks(filteredBooks)
    }

    return (
        <div>
            <BooksList books={books} onDelete={deleteBookById}/>
            <NewBookForm onSubmit={createBook} />
        </div>
    )
}

export default App