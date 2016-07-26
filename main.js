import React from "react";
import ReactDOM from "react-dom";

const books = [
  { id: 1, title: 'Book 1', price: 2900 },
  { id: 7, title: 'Book 9', price: 3900 },
  { id: 99, title: 'Book 14', price: 4900 },
  { id: 101, title: 'Book 66', price: 1900 }
];

import BookList from "./components/book-list";

ReactDOM.render(
  <BookList books={books} />
  ,
  document.getElementById("react")
);
