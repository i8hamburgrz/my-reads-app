import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class ListBooks extends Component{

	render(){
		const { myBooks, updateShelf, onUpdateBookRating } = this.props;

		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
      				<div className="bookshelf">
      	          		<h2 className="bookshelf-title">Current Reading</h2>
  	          			<div className="bookshelf-books">
          	            	<ol className="books-grid">
          	            		{ myBooks
          	            			.filter(book => { return book.shelf === 'currentlyReading'})
          	            			.map(book => (
          	            				<li key={book.id}>
          	            					<Book 
          	            						title={book.title}
          	            						authors={book.authors}
          	            						imgThumb={book.imageLinks.smallThumbnail}
          	            						updateShelf={updateShelf}
          	            						bookId={book.id}
          	            						shelf={book.shelf}
          	            						rating={book.averageRating}
          	            						updateBookRating={onUpdateBookRating}
          	            					/>
          	            				</li>
          	            			))
          	            		}
	          	            </ol>
	          	        </div>
          	        </div>

          	        <div className="bookshelf">
      	          		<h2 className="bookshelf-title">Want to read</h2>
  	          			<div className="bookshelf-books">
          	            	<ol className="books-grid">
	          	            	{ myBooks
	          	            		.filter(book => { return book.shelf === 'wantToRead'})
	          	            		.map(book => (
	          	            			<li key={book.id}>
	          	            				<Book 
	          	            					title={book.title}
	          	            					authors={book.authors}
	          	            					imgThumb={book.imageLinks.smallThumbnail}
	          	            					updateShelf={updateShelf}
	          	            					bookId={book.id}
	          	            					shelf={book.shelf}
	          	            					rating={book.averageRating}
	          	            					updateBookRating={onUpdateBookRating}
	          	            				/>
	          	            			</li>
	          	            		))
	          	            	}
	          	            </ol>
	          	        </div>
          	        </div>

          	        <div className="bookshelf">
      	          		<h2 className="bookshelf-title">Read</h2>
  	          			<div className="bookshelf-books">
          	            	<ol className="books-grid">
          	            		{ myBooks
	          	            		.filter(book => { return book.shelf === 'read'})
	          	            		.map(book => (
	          	            			<li key={book.id}>
	          	            				<Book 
	          	            					title={book.title}
	          	            					authors={book.authors}
	          	            					imgThumb={book.imageLinks.smallThumbnail}
	          	            					updateShelf={updateShelf}
	          	            					bookId={book.id}
	          	            					shelf={book.shelf}
	          	            					rating={Math.ceil(book.averageRating)}
	          	            					updateBookRating={onUpdateBookRating}
	          	            				/>
	          	            			</li>
	          	            		))
	          	            	}
          	              
	          	            </ol>
	          	        </div>
          	        </div>
	            </div>
	            <div className="open-search">
	            	<Link to="/search">Add a book</Link>
	            </div>
          	</div>
		)
	}
} 

export default ListBooks;
