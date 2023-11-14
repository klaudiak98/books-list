import { useState } from "react"
import BooksContext from "../context/BooksContext"
import useBooksContext from '../hooks/useBooksContext'

const BookEditForm = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title)
  const { editBookById } = useBooksContext(BooksContext)
  
  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editBookById(book.id, title)
    onSubmit()
  }

  return (
   <form className="book-edit" onSubmit={handleSubmit}>
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange}/>
    <button className="button is-primary">Save</button>
   </form>
  )
}

export default BookEditForm