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

export default BookList;
