import React from "react";

const Book = ({ title, price }) => {
  return (
    <li className="one-book">
      {title} {price}
    </li>
  );
};

export default Book;
