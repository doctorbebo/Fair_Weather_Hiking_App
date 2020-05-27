import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Bar } from 'react-chartjs-2'

import Navbar from '../navbar';
import API from '../../utils/API';
import './styles.css'


class Stats extends Component {

    constructor() {
        super();
        this.state = {
            elevation: [],
            miles: [],
            totalElevation: '',
            totalMiles: '',
            hikeCount: ''
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
                    
                    //arrays of data from api call for stats chart
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
                    totalMiles: totalMiles,
                    hikeCount: res.data.length
                })
            })
    }

    render() {
        return <div className = "">
            <Navbar page='stats' />
        
            <div className = "container">
                <div className = "stats">

                        <h4 className = "banner">You have completed {this.state.hikeCount} hikes so far!</h4>
                        <h5 className = "banner">Here are your stats:</h5>
                            <div className = "chart">
                            <Bar
                            height ={200}
                            width ={650}
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
                            options={{
                                maintainAspectRatio: false,
                                legend: {
                                    display: false,
                                },
                                title: {
                                    display: true,
                                    text: 'Elevation Hiked By Month',
                                    fontColor: "white"
                                },
                                scales: {
                                    xAxes: [{ 
                                        gridLines: {
                                            display: true,
                                        },
                                        ticks: {
                                            fontColor: "white", 
                                        },
                                    }],
                                    yAxes: [{
                                        display: true,
                                        gridLines: {
                                            display: true,
                                            color:"white",
                                        },
                                        ticks: {
                                            fontColor: "white", 
                                        }
                                    }],
                                },
                                tooltips: {
                                    callbacks: {
                                    label: function(tooltipItem) {
                                            return tooltipItem.yLabel;
                                    }
                                    }
                                }
                            }}
                            />
                            </div>
                            <div className = "chart">
                            <p className = "totals">Total Elevation: {this.state.totalElevation} ft</p>
                            <Bar
                            data={{
                                labels: ['January', 'February', 'March',
                                    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                datasets: [
                                    {
                                        backgroundColor: 'rgba(70,191,255,1)',
                                        data: this.state.miles
                                    }
                                ]
                            }}
                            options={{
                                maintainAspectRatio: false,
                                title: {
                                    display: true,
                                    text: 'Miles Hiked By Month',
                                    borderColor: 'rgba(0,0,0,1)',
                                    fontColor:"white",
                                    
                                },
                                scales: {
                                    xAxes: [{ 
                                        gridLines: {
                                            display: true,
                                        },
                                        ticks: {
                                            fontColor: "white", // this here
                                        },
                                    }],
                                    yAxes: [{
                                        display: true,
                                        gridLines: {
                                            display: true,
                                            color:"white",
                                        },
                                        ticks: {
                                            fontColor: "white", // this here
                                        }
                                    }],
                                },
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                    label: function(tooltipItem) {
                                            return tooltipItem.yLabel;
                                    }
                                    }
                                }
                            }}
                            />
                            <p className = "totals">Total Miles: {this.state.totalMiles} miles</p>
                        </div>
                </div>
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