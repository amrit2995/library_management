import React, { Component } from 'react'
import DisplayBooks from './components/display_books'
import CreateNewBookButton from './components/add_new_book';


export class Books extends Component {
  render() {

    const bookData = [
        { id: 1, author: 'Author 1', title: 'Title 1', publisher: 'Publisher 1', pages: 200, book_format: 'Hardcover' },
        { id: 2, author: 'Author 2', title: 'Title 2', publisher: 'Publisher 2', pages: 150, book_format: 'Paperback' },
        // Add more book data as needed
      ];
    return (
      <div>
        <CreateNewBookButton/>
        <DisplayBooks data={bookData} />
      </div>
    )
  }
}

export default Books
