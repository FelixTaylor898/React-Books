import { Fragment } from 'react';

export function Book(props) {
    const book = props.book;
    return (
        <Fragment>
            <div className="content-div">
                <span className="main-name">{book.title} ({book.year})</span><br />
                <span>{book.author}</span><br />
                <span>✰ {(Math.round(book.rating * 100) / 100).toFixed(2)}</span>
            </div>
        </Fragment>
    );
}