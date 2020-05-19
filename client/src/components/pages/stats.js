import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Bar } from 'react-chartjs-2'

import Navbar from '../navbar';
import API from '../../utils/API';

class Stats extends Component {

    constructor() {
        super();
        this.state = {
            elevation: [],
            miles: [],
            totalElevation: '',
            totalMiles: ''
        }
    }


    componentDidMount() {
        let totalElevation = 0;
        let totalMiles = 0;
        let elevationByMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
        let milesByMonth = [0,0,0,0,0,0,0,0,0,0,0,0];

        API.getStats(this.props.auth.user.id)
            .then(res => {
                console.log(res.data)
                for(let i=0; i<res.data.length; i++) {
                    
                    //arrays of data for stats chart
                    let month = res.data[i].day.split('-')[1];
                    elevationByMonth[month-1] += res.data[i].ascent;
                    milesByMonth[month-1] += parseInt(res.data[i].length)

                    //calculating total miles and total elevation gain
                    let miles = parseInt(res.data[i].length)
                    totalElevation += res.data[i].ascent;
                    totalMiles += miles

                }
                this.setState({
                    elevation: elevationByMonth,
                    miles: milesByMonth,
                    totalElevation: totalElevation,
                    totalMiles: totalMiles
                })
            })
    }

    render() {
        return <div>
            <Navbar page='stats' />
            <div style={{width: '60%', height: '200px'}}>
            <Bar
            data={{
                labels: ['January', 'February', 'March',
                    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Elevation',
                        backgroundColor: 'rgba(75,192,192,1)',
                        data: this.state.elevation
                    }
                ]
            }}
            options={{ maintainAspectRatio: false }}
            />
            <p>Total Elevation: {this.state.totalElevation} ft</p>
            <Bar
            data={{
                labels: ['January', 'February', 'March',
                    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Miles',
                        backgroundColor: 'rgba(75,192,192,1)',
                        data: this.state.miles
                    }
                ]
            }}
            options={{ maintainAspectRatio: false }}
            />
            <p>Total Miles: {this.state.totalMiles} miles</p>
            </div>
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