import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm';
import Customers from './components/Customers';
import Rental from './components/Rental';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import './App.css';



function App() {
  return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/movies/create" component={ MovieForm }></Route>
          <Route path="/movies" component={ MovieList }></Route>
          <Route path="/customers" component={ Customers}></Route>
          <Route path="/rentals" component={ Rental }></Route>
          <Route path="/not-found" component={ NotFound}></Route>
          <Route path="/login" component={ LoginForm }></Route>
          <Route path="/register" component={ Register }></Route>
          <Redirect from="/" exact to="movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </React.Fragment>
  );
}

export default App;
