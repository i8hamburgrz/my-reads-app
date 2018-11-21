import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((myBooks) => {
        this.setState(() => ({
          myBooks
        }))
      })
  }

  updateBookShelf = (bookId, shelf) => {
    this.setState(currentState => ({
      myBooks: currentState.myBooks.map(book => {
          if(book.id === bookId){
            book.shelf = shelf;
            BooksAPI.update(book, shelf);
          }

          return book;
        }
      )
    }))

    BooksAPI.update(bookId, shelf);
  }

  updateBookRating = (bookId, rating) => {
    this.setState(currentState => ({
      myBooks: currentState.myBooks.map(book => {
          if(book.id === bookId){
            book.averageRating = rating;
            BooksAPI.updateRating(book, rating);
          }

          return book;
        }
      )
    }))

    BooksAPI.update(bookId, rating);
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks 
              myBooks={this.state.myBooks}
              updateShelf={this.updateBookShelf}
              onUpdateBookRating={this.updateBookRating} />
          )} />

          <Route exact path="/search" render={({history}) => (
            <SearchBooks 
              onUpdateShelf={(bookId, shelf) => {
                this.updateBookShelf(bookId, shelf);
                history.push('/');
              }}
           />
          )} />
      </div>
    )
  }
}

export default BooksApp;
