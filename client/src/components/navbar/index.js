import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper nav-background">
            <div className="brand-logo center black-text icons-center">
              <Link to='/'><i className="tiny material-icons icon-black">home</i></Link>
              
              {this.props.page !== 'favorites' &&
              <Link to='/favorites' title='favorites'><i className="material-icons icon-yellow">star</i></Link>}
              
              {this.props.page !== 'completed' &&
              <Link to='/completed' title='completed'><i className="material-icons icon-green">check</i></Link>}
              
              {this.props.page !== 'search' &&
              <Link to='/search' title='search'><i className="material-icons icon-blue">search</i></Link>}
            
              {this.props.page !== 'stats' && 
              <Link to='/stats' title='stats'><i className="material-icons icon-black">show_chart</i></Link>}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;