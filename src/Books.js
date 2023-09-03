import { useEffect, Fragment } from 'react';
import { Book } from './Book';
import { useSelector, useDispatch } from 'react-redux';
import { sortByAuthor } from './actions';

export function Books() {
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sortByAuthor());
    }, [dispatch]);

    return (
        <Fragment>
            <div className="box-div">
                {books.map(book => <Book key={book.title} book={book} />)}
            </div>
        </Fragment>
    );
}