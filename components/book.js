import React from "react";

import { convertToUSD } from "../util";

const Book = ({ title, price }) => {
  return (
    <li className="one-book">
      {title}, {convertToUSD(price)}
    </li>
  );
};

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired
};

export default Book;
