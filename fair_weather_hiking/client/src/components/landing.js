import React, { Component } from "react";
import { Router, Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">

        <div className="row">
          <h2>Fair Weather Hiking</h2>
          <div className="col s12 center-align">
            <div className="col s6">                    
              <a href='/register'><button
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </button></a>
            </div>
            <div className="col s6">
              <a href="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;