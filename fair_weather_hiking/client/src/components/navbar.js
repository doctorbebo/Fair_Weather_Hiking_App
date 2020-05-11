import React, { Component } from "react";
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s2'>
            <nav className="z-depth-0" id='nav-bar'>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li><a href='/'>Home</a></li>
                <li><a href='/search'>Search</a></li>
                <li><a href='/favorites'>Favorites</a></li>
                <li><a href='#'>Completed</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;