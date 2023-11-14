import { useState, useContext } from "react"
import BookEditForm from  './BookEditForm'
import BooksContext from "../context/BooksContext"

const Book = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteBookById } = useContext(BooksContext)

  const handleDelete = () => {
    deleteBookById(book.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  return ( 
    <div className="book-show">
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}/> 
      {showEdit ? <BookEditForm book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3> } 
      <div className="actions">
        <button onClick={handleEdit} className="edit">Edit</button>
        <button onClick={handleDelete} className="delete">Delete</button>
      </div>
    </div>
  )
}

export default Book