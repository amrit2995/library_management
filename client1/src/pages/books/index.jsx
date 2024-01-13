import React, { Component } from 'react'
import DisplayBooks from './components/display_books'
import CreateNewBookButton from './components/add_new_book';
import BookService from '../../services/BookService';


export class Books extends Component {
  render() {

    const bookData = BookService.getBookData()
    
    return (
      <div>
        <CreateNewBookButton/>
        <DisplayBooks data={bookData} />
      </div>
    )
  }
}

export default Books
