import {useEffect, useContext } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import BooksContext from './context/books';

function App () {

const {fetchBooks} = useContext(BooksContext);    

useEffect(() => {
    fetchBooks();
}, [fetchBooks] ) ;

// dont do this:
//fetchBooks(); it will end up happening an infinte loop of network requests, because our application will rerender everytime.


    return <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
}

export default App;