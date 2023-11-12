const Book = ({book, onDelete}) => {

  const handleDelete = () => {
    onDelete(book.id)
  }
  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button onClick={handleDelete} className="delete">Delete</button>
      </div>
    </div>
  )
}

export default Book