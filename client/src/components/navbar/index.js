import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      style: {borderBottom: '3px solid teal', paddingLeft: '15px', paddingRight: '15px'}
    }
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0 nav-center">
          <div className="nav-wrapper white row">
            <div className="col s12 l4 brand-logo center black-text">
              <ul>
              <li className='tab'><Link to='/' title='home'><i className="material-icons icon-black">home</i></Link></li>              
              
              <li className='tab'>
              {/* {this.props.page !== 'search' && */}
              <Link to='/search' title='search'><i className="material-icons icon-blue" style={this.props.page === 'search' ? this.state.style : {}}>search</i></Link></li>
            
              {/* <li>{this.props.page !== 'favorites' && */}
              <li>
              <Link to='/favorites' title='favorites'><i className="material-icons icon-yellow" style={this.props.page === 'favorites' ? this.state.style : {}}>star</i></Link></li>
              
              <li className='tab'>
              {/* {this.props.page !== 'completed' && */}
              <Link to='/completed' title='completed'><i className="material-icons icon-green" style={this.props.page === 'completed' ? this.state.style : {}}>check</i></Link></li>
              
              
              <li className='tab'>
              {/* {this.props.page !== 'stats' &&  */}
              <Link to='/stats' title='stats'><i className="material-icons icon-black" style={this.props.page === 'stats' ? this.state.style : {}}>show_chart</i></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;