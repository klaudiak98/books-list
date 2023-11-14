import Book from './Book'
import BooksContext from '../context/BooksContext'
import { useContext } from 'react'

const BooksList = () => {
  const { books } = useContext(BooksContext)

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