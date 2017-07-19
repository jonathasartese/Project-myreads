import React, { Component } from 'react'

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
                                <Books 
                                    allBooks={allBooks} 
                                    status={status.shelf}
                                    updateBook={updateBook}                                                                       
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                   
                </div>
            </div>
        )
    }
}

export default ListBooks