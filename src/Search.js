import { useDispatch } from 'react-redux';
import { sortByTitleDescend, sortByAuthorDescend, sortByTitle, sortBooksByRatingAscend, sortBooksByRatingDescend, sortBooksByYearAscend, sortBooksByYearDescend, randomizeBooks, sortByAuthor } from './actions';
import { Fragment } from 'react';


export function Search() {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="search">

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortByAuthor())
          }}>Author (Ascending)</button>
        </div>

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortByAuthorDescend())
          }}>Author (Descending)</button>
        </div>

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortByTitle())
          }}>Title (Ascending)</button>
        </div>

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortByTitleDescend())
          }}>Title (Descending)</button>
        </div>

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(randomizeBooks())
          }}>Randomize</button>
        </div>

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortBooksByRatingAscend())
          }}>Rating (Ascending)</button>
        </div>
        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortBooksByRatingDescend())
          }}>Rating (Descending)</button>
        </div>

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortBooksByYearAscend())
          }}>Year (Ascending)</button>
        </div>

        <div>
          <button className="search-button sort-button" onClick={() => {
            dispatch(sortBooksByYearDescend())
          }}>Year (Descending)</button>
        </div>


      </div>
    </Fragment>
  );


}