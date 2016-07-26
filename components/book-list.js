import React from "react";
import Book from "./book";

// Stateless function component
// const BookList = ({ books }) => {
//   const zebraClass = index => index % 2 ? 'even' : 'odd';
//
//   return (
//     <ul className="book-list">
//       {books.map((book, index) => {
//         return <Book key={book.id} zebraClass={zebraClass(index)} {...book} />
//       })}
//     </ul>
//   );
// };

class BookList extends React.Component {
  zebraClass(index) {
    return index % 2 ? 'even' : 'odd';
  }
  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
      {books.map((book, index) => {
        return <Book key={book.id} zebraClass={this.zebraClass(index)} {...book} />
      })}
      </ul>
    );
  }
}


BookList.propTypes = {
  books: React.PropTypes.arrayOf(React.PropTypes.object)
}

BookList.defaultProps = {
  books: []
}

export default BookList;
