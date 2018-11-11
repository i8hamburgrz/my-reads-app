import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component{
	state = {
		query:'',
		result: []
	}

	updateQuery = query => {
		this.setState(() => ({
			query: query.trim()
		}))

		this.searchForBooks(query);
	}

	searchForBooks = query => {
		if(query.length == 0){
			this.setState(() => ({
				result: []
			}))

			return;
		}
		
		BooksAPI.search(query)
			.then((result) => {
		        this.setState(() => ({
		          result: result
		        }))
	      	})
	}

	render(){
		const { onUpdateShelf } = this.props;
		const { query, result } = this.state;

		return(
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link
	              	to="/"
	              	className="close-search">Close</ Link>

	              <div className="search-books-input-wrapper">
	                {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
	                <input 
	                	type="text" 
	                	placeholder="Search by title or author"
	                	value={query}
	                	onChange={(event) => this.updateQuery(event.target.value)}
	                />

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{ result.error ? (<li>No Results Found</li>) :
		              	result.map(book => (
		        				<li key={book.id}>
		        					<Book 
		        						title={book.title}
		        						authors={book.authors}
		        						imgThumb={book.imageLinks.smallThumbnail}
		        						bookId={book.id}
		        						shelf={book.shelf}
		        						updateShelf = {onUpdateShelf}
		        					/>
		        				</li>
		        			))
	            		}
	              </ol>
	            </div>
	        </div>
		)
	}
}

export default SearchBooks;
