import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import API from '../../utils/API';

class Stats extends Component {

    componentDidMount() {
        API.getStats(this.props.auth.user.id)
    }

    render() {
        return <div>Welcome to the stats page</div>
    }
}

Stats.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Stats);