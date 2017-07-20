import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class Search extends Component {

    state = {
        ListBook: [],
        SaveQuery: '',
    }

    SearchBook = (query) => {
        if (query.trim() !== '') {
            BooksAPI.search(query).then((res) => {
                res.map(book => (this.props.allBooks.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                if (res && res.length) this.setState({ListBook: res, SaveQuery: query})
                if (res.error) this.setState({ListBook: [], SaveQuery: query})
            })
        } else { this.setState({ ListBook: [] }) }
    }

    render() {
        const { updateBook } = this.props

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
                        updateBook={updateBook}
                    />
                </div>
            </div>
        )
    }
}

export default Search