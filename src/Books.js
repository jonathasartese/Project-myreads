import React, { Component } from 'react'

class Books extends Component {

    render() {
        const { allBooks , updateBook } = this.props

        return(
            <div>
                <ol className="books-grid">
                {allBooks.map((Book) => ( 
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
                                        <select value={Book.shelf} onChange={(event) => updateBook(Book, event.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="book-title">{Book.title}</div>
                            <div className="book-authors">{Book.authors}</div>
                        </div>
                    </li>
                ))}
                </ol>
            </div>
        )
    }
}

export default Books