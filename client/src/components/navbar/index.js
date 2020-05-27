import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0 nav-center">
          <div className="nav-wrapper white row">
            <div className="col s12 l4 brand-logo center black-text">
              <ul>
              <li><a href='/' title='home'><i className="material-icons icon-black">home</i></a></li>              
              
              <li>{this.props.page !== 'favorites' &&
              <Link to='/favorites' title='favorites'><i className="material-icons icon-yellow">star</i></Link>}</li>
              
              <li>{this.props.page !== 'completed' &&
              <Link to='/completed' title='completed'><i className="material-icons icon-green">check</i></Link>}</li>
              
              <li>{this.props.page !== 'search' &&
              <Link to='/search' title='search'><i className="material-icons icon-blue">search</i></Link>}</li>
            
              <li>{this.props.page !== 'stats' && 
              <Link to='/stats' title='stats'><i className="material-icons icon-black">show_chart</i></Link>}</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;