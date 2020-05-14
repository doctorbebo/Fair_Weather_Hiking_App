import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Navbar from '../navbar';
import API from '../../utils/API';

class Stats extends Component {

    constructor() {
        super();
        this.state = {
            elevation: "",
            miles: ""
        }
    }


    componentDidMount() {
        let totalElevation = 0;
        let totalMiles = 0;
        API.getStats(this.props.auth.user.id)
            .then(res => {
                console.log(res.data)
                for(let i=0; i<res.data.length; i++) {
                    totalElevation += res.data[i].ascent;
                    totalMiles += res.data[i].length
                }
                console.log('totalElevation: ' + totalElevation)
                console.log('totalMiles: ' + totalMiles)
                this.setState({
                    elevation: totalElevation,
                    miles: totalMiles
                })
            })
    }

    render() {
        return <div>
            <Navbar page='stats' />
            <p>Total Elevation: {this.state.elevation} ft</p>
            <p>Total Miles: {this.state.miles} miles</p>
        </div>
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