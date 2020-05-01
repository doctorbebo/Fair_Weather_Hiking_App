import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Landing from './components/landing';
//import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';

// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Landing} />
        </div>
      </Router>
    // </Provider>
    
  );
}

export default App;
