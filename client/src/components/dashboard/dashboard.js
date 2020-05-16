import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Button from '../button';

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className='row'>
          </div>
          <div className="col s12 center-align">
            <h4>
              <b>Hey,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to Fair Weather Hiking
              </p>
            </h4>
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
              <Link to="/search"><Button name='Find A Hike' width='300px'/></Link><br />
              <Link href="/completed"><Button name='View Completed Hikes' width='300px'/></Link><br />
              <Link href='/favorites'><Button name='View Favorite Hikes' width='300px'/></Link><br /><br />
              <Link to='/login' onClick={this.onLogoutClick}>Log out</Link>
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