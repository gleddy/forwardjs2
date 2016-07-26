import React from "react";
import Book from "./book";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return <Book key={book.id} {...book} />
      })}
    </ul>
  );
};

BookList.propTypes = {
  books: React.PropTypes.arrayOf(React.PropTypes.object)
}

BookList.defaultProps = {
  books: []
}

export default BookList;
