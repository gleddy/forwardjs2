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
  constructor(props) {
    super(props);
    this.state = { books: this.props.books }
  }
  zebraClass(index) {
    return index % 2 ? 'even' : 'odd';
  }
  componentWillMount() {
    debugger;
  }
  componentDidMount() {
    debugger;
  }
  componentWillUnmount() {
    debugger;    
  }
  componentWillRecieveProps() {

  }
  componentWillUpdate() {

  }
  componentDidUpdate(prevProps, prevState) {

  }
  shouldComponentUpdate() {

  }

  render() {
    return (
      <ul className="book-list">
      {this.state.books.map((book, index) => {
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
