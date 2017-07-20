import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'

class ListBooks extends Component {

    render() {
        const { bookStatus, allBooks, updateBook } = this.props

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookStatus.map((status, index) => (
                            <div key={index} className="bookshelf">
                                <h2 className="bookshelf-title">{status.name}</h2>
                                <div className="bookshelf-books">
                                    <Books 
                                        allBooks={allBooks.filter((book) => book.shelf === status.shelf)} 
                                        updateBook={updateBook}                                                                       
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                   <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks