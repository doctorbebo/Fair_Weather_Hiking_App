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
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className='row'>
          </div>
          <div className="col s12 center-align">
            <div id='heading'>
              <h4>
                {/* <b className='white-text'>Hey, {user.name.split(" ")[0]}</b> */}
                <p className="flow-text white-text text-darken-1">
                  Fair Weather Hiking
                </p>
              </h4>
            </div>
            
            {/* <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button> */}
            <div className='row'>
              {/* Heroku needs a "Link" tag instead of an "a" tag. Also be sure to change "href" to "to" like below. */}
              <Link to="/search"><Button name='Find A Hike' width='300px'/></Link><br />
              <Link to="/completed"><Button name='View Completed Hikes' width='300px'/></Link><br />
              <Link to='/favorites'><Button name='View Favorite Hikes' width='300px'/></Link><br />
              <Link to='/stats'><Button name='View Stats' width='300px'/></Link><br /><br />
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