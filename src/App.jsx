import { useEffect, useContext } from "react"
import NewBookForm from './components/NewBookForm'
import BooksList from './components/BooksList'
import BooksContext from "./context/BooksContext"

const App = () => {
    const { fetchBooks} = useContext(BooksContext)

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BooksList/>
            <NewBookForm/>
        </div>
    )
}

export default App