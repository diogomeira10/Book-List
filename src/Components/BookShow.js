import { useState, useEffect } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';
import searchImages from '../api';

function BookShow ({book}) {

    const [showEdit, setShowEdit] = useState(false) //HardCoded to be false because we dont wanna show the form by default
    const [imageUrl, setImageUrl] = useState(null)

    const {deleteBookById} = useBooksContext();

    useEffect(() => {
        const fetchImage = async () => {
            const result = await searchImages(book.title)
            if (result.length > 0) {
                setImageUrl(result[0].urls.small);
            }
        }

        fetchImage()
    }, [book.title])

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    };

    const handleSubmit = () => {
        setShowEdit(false)

    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit}  book={book} />;
    }

    return <div className="book-show">
        <img
        alt="books"
        src={imageUrl}
        />
        <div>{content}</div>
        <div className="actions">
            <button className='edit' onClick={handleEditClick} >Edit</button>
            <button className="delete" onClick = {handleDeleteClick}>Delete</button>
            
        </div>
        </div>
};

export default BookShow;