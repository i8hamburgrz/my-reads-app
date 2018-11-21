import React, { Component } from 'react';

class Book extends Component{
	state = {
	  optionsState: this.props.shelf || 'none',
	  className: "start_" + this
	}

	updateShelf = value => {
		debugger;
		this.props.updateShelf(this.props.bookId, value);
	}

	handleUpdateBookRating = value => {
		debugger;
		this.props.updateBookRating(this.props.bookId, 2);
	}


	render(){
		const { title, authors, imgThumb, rating } = this.props;
		const { optionsState } = this.state;

		return (
			<div className="book">
			  <div className="book-top">
			    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imgThumb})` }}></div>
			    
			    <div className="book-shelf-changer">
			      <select value={optionsState} onChange={(event) => this.updateShelf(event.target.value)}>
			        <option value="move" disabled>Move to...</option>
			        <option value="currentlyReading">Currently Reading</option>
			        <option value="wantToRead">Want to Read</option>
			        <option value="read">Read</option>
			        <option value="none">None</option>
			      </select>
			    </div>
			  
			  </div>
			  
			  <div className="book-title">{ title }</div>

			  <div className={rating ? 'book-rating rating_' + rating : 'book-rating'} onClick={(event) => this.handleUpdateBookRating(event.target.value)}>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
			  </div>
			  
			  { authors && authors.map(author => (<div className="book-authors" key={author}> { author } </div> ))}


			  	
			</div>
		)
	}
}

export default Book;