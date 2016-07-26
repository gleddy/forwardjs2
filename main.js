import React from "react";
import ReactDOM from "react-dom";

const books = [
  { id: 1, title: 'Book 1', price: 2900 },
  { id: 7, title: 'Book 9', price: 3900 },
  { id: 99, title: 'Book 14', price: 4900 },
  { id: 101, title: 'Book 66', price: 1900 }
];

const Book = ({ title, price }) => {
  return (
    <li className="one-book">
      {title}, {price}
    </li>
  );
}

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return <Book key={book.id} {...book} />
      })}
    </ul>
  );
};

ReactDOM.render(
  React.createElement(BookList, { books })
  ,
  document.getElementById("react")
);
