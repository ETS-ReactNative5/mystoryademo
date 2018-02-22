import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


import Nav from "./components/Header";
import Footer from "./components/landing-components/footer";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import Book1 from "./components/Book1";
import Book2 from "./components/Book2";
import BookShelf from "./components/BookShelf";
/* const Header = 'header'; */
/* const Book1 = 'book1'; */
/* const Book2 = 'book2'; */
/* const BookShelf = 'BookShelf'; */

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div classname='container'>
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/books/1" component={Book1} />
          <Route exact path="/books/2" component={Book2} />
          <Route exact path="/books" component={Landing} />
          <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
