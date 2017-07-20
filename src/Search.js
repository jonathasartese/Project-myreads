import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { Books } from './Books'

class Search extends Component {

    states = {
        ListBook: [],
        SaveQuery: ''
    }

    SearchBook = (query) => {
        if (query.trim() !== '') {
            BooksAPI.search(query).then(res => {
            if (res && res.length) this.setState({ListBook: res, SaveQuery: query})
            })
        }
    }

    updateSearch = (Book, event) => {
        BooksAPI.update(Book, event).then(() => { 
            this.SearchBook(this.SaveQuery).then((ListBook) => {
                this.setState({ ListBook })
            })
        })
    }

    render() {
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                onChange={(event) => this.SearchBook(event.target.value)}
                            />
                        </div>
                </div>
                <div className="search-books-results">
                    <Books
                        allBooks={this.state.ListBook}
                        updateBook={(Book, event) => (
                            this.updateSearch(Book, event)
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default Search