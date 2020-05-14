import React, { Component } from "react";
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white row">
            <div className="col s5 brand-logo center black-text">
              <a href='/'><i className="material-icons icon-black">home</i></a>
              
              {this.props.page !== 'favorites' &&
              <a href='/favorites'><i className="material-icons icon-yellow">star</i></a>}
              
              {!this.props.page !== 'completed' &&
              <a href='#'><i className="material-icons icon-green">check</i></a>}
              
              {this.props.page !== 'search' &&
              <a href='/search'><i className="material-icons icon-blue">search</i></a>}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;