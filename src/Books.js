import React, { Component } from 'react'

class Books extends Component {
    state = {

    }

    render() {
        const { allBooks, status, updateBook } = this.props

        let showBooks = status.toUpperCase().replace(/ /g,'')
        showBooks = allBooks.filter((book) => book.shelf.toUpperCase() === status.toUpperCase().replace(/ /g,''))

        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                {showBooks.map((Book) => ( 
                    <li key={Book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ 
                                    width: 128, 
                                    height: 193, 
                                    backgroundImage: `url(${Book.imageLinks.smallThumbnail})`
                                    }}>
                                </div>
                                    <div className="book-shelf-changer">
                                        <select value={status} onChange={(event) => updateBook(Book, event.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="book-title">{Book.title}</div>
                            <div className="book-authors">{Book.authors[0]}</div>
                        </div>
                    </li>
                ))}
                </ol>
            </div>
        )
    }
}

export default Books