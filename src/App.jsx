import { useState } from "react"
import NewBookForm from './components/NewBookForm'

const App = () => {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        setBooks([...books, {id: Math.round(Math.random() * 9999), title}])
    }

    return (
        <div>
            <NewBookForm onSubmit={createBook} />
        </div>
    )
}

export default App