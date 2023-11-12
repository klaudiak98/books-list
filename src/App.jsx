import { useState } from "react"
import NewBookForm from './components/NewBookForm'
import BooksList from './components/BooksList'

const App = () => {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        setBooks([...books, {id: Math.round(Math.random() * 9999), title}])
    }

    return (
        <div>
            <BooksList books={books} />
            <NewBookForm onSubmit={createBook} />
        </div>
    )
}

export default App