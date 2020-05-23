import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
              <Link to='/favorites'><i className="material-icons icon-yellow">star</i></Link>}
              
              {this.props.page !== 'completed' &&
              <Link to='/completed'><i className="material-icons icon-green">check</i></Link>}
              
              {this.props.page !== 'search' &&
              <Link to='/search'><i className="material-icons icon-blue">search</i></Link>}
            
              {this.props.page !== 'stats' && 
              <Link to='/stats'><i className="material-icons icon-black">show_chart</i></Link>}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;