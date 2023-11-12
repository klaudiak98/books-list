import Book from './Book'

const BooksList = ({books, onDelete}) => {
  const renderedBooks = books.map((book) => (
    <Book key={book.id} book={book} onDelete={onDelete}/>
  ))
  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BooksList