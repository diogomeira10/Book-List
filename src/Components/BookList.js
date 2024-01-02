import BookShow from './BookShow'
import useBooksContext from '../hooks/use-books-context';



function BookList () {

    const {books} = useBooksContext();

    const renderedBooks = books.map((book) => { 
        return <BookShow  key={book.id} book={book} />; //Since we are building a lists of different elements we need to add a key prop

    });


    return <div className="book-list">
        {renderedBooks}  
        </div>
}

export default BookList;