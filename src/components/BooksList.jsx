import Book from './Book'
import useBooksContext from '../hooks/useBooksContext'

const BooksList = () => {
  const { books } = useBooksContext()

  const renderedBooks = books.map((book) => (
    <Book key={book.id} book={book}/>
  ))

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BooksList