import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import Navbar from './components/navbar';
import Register from './components/pages/register';
import Login from './components/pages/login';
import PrivateRoute from "./components/routes/privateRoute";


import Dashboard from "./components/dashboard/dashboard";

import Stats from './components/pages/stats';
import Search from './components/pages/search';
import FavoriteContainer from './components/favorites/favoriteContainer';
import CompletedContainer from './components/completed/completedContainer';
import 'materialize-css/dist/css/materialize.min.css';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from './store';

import Background from "./background";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  
  if (decoded.exp < currentTime) {
    
    // Logout user
    store.dispatch(logoutUser());
    
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
    <Background />
      <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path='/' component={Register} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/favorites' component={FavoriteContainer} />
            <Route exact path='/stats' component={Stats} />
            <Route exact path='/completed' component={CompletedContainer} />
          </div>
      </Router>
    </Provider>
    
  );
}

export default App;
