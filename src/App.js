import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    bookStatus: [
      { shelf: 'currentlyReading', name: 'Currently Reading' }, 
      { shelf: 'wantToRead', name: 'Want to Read' },
      { shelf: 'read', name: 'Read'}],
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState({ allBooks })
    })
  }

   updateBook = (Book, event) => {
     Book.shelf = event.target.value
     BooksAPI.update(Book, event.target.value).then((response) => {
      let newCollection = this.state.allBooks
        .filter(b => b.id !== Book.id)
        .concat([ Book ])
      this.setState({ allBooks: newCollection })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks bookStatus={this.state.bookStatus} 
            allBooks={this.state.allBooks}
            updateBook={(Book, event) => {
            this.updateBook(Book, event)
          }}
           />
        )} />

        <Route path='/search' render={() => (
          <Search 
            allBooks={this.state.allBooks}
            updateBook={(Book, event) => {
            this.updateBook(Book, event)
          }}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp
