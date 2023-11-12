import { useState } from "react"
import BookEditForm from  './BookEditForm'

const Book = ({book, onDelete, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    onDelete(book.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)
    onEdit(id, newTitle)
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