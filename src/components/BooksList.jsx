import Book from './Book'

const BooksList = ({books}) => {
  const renderedBooks = books.map((book) => (
    <Book key={book.id} book={book} />
  ))
  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BooksList