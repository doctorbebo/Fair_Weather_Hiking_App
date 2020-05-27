import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Button from '../button';
import {Redirect} from 'react-router-dom';
import './style.css';

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    if(!this.props.auth.isAuthenticated) {
      return <Redirect to='/login' />
    }
    // const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className='row'>
          </div>
          <div className="col s12 center-align" id='heading'>
                {/* <b className='white-text'>Hey, {user.name.split(" ")[0]}</b> */}
                {/* <h2 className="flow-text white-text text-darken-1"> */}
                <h4>
                  Fair Weather Hiking
                </h4>
            
            <div className='row'>
              {/* Heroku needs a "Link" tag instead of an "a" tag. Also be sure to change "href" to "to" like below. */}
              <div className="btn-div"><Link to="/search"><Button name='Find A Hike' width='300px'/></Link></div>
              <div><Link to="/completed"><Button name='View Completed Hikes' width='300px'/></Link></div>
              <div><Link to='/favorites'><Button name='View Favorite Hikes' width='300px'/></Link></div>
              <div><Link to='/stats'><Button name='View Stats' width='300px'/></Link></div>
              <div id='logout'><Link to='/login' onClick={this.onLogoutClick}>Log out</Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);