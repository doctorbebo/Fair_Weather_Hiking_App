import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from "react-redux";


import Button from '../button';
import Label from '../label';
import Results from './results';
import Navbar from '../navbar';

import Hike from '../hike'


import M from 'materialize-css';

class Search extends Component {
    //initialize Materialize
    componentDidMount() {

        M.AutoInit();
        if ("geolocation" in navigator) {
            console.log("Current location is Available");
          } else {
            console.log("Current location is Not Available");
          }
          navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})
          });
    }

    constructor() {
        super();
            this.state = {
            minLength: "",
            maxElevation: "",
            maxTravel: "",
            latitude: 0,
            longitude: 0,
            hikes: [],

            isSubmitted: false

            };
            this.onSubmit=this.onSubmit.bind(this);     
      }
    // getuserlocation = () => {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //         this.setState ({latitude: position.coords.latitude})
    //         this.setState ({longitude: position.coords.longitude})
    //       });
    //   }

    onChange = event => {
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            isSubmitted: true
        })
        // let maxElevation = this.state.maxElevation
        // await axios.get(hikerequest+latitude+longitude+minLength+maxDistance+resultQty+apiKey)
        // .then(res => {
        //     console.log(res.data.trails);
            // if(maxElevation !== null){
            //     const filteredHikes = res.data.trails.filter(trail => trail.ascent < maxElevation)
            //     console.log(filteredHikes)
            //     this.setState({ hikes: filteredHikes})
            // } else {
            //     this.setState({hikes: res.data.trails})
            // }
        //    this.state.hikes.map((hike) => 
        //     axios.get("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat="+hike.latitude+"&lon="+hike.longitude+"&units=imperial&appid=af4b6cb437caa6db643b24a43b52989b")
        //     .then(resp =>{
        //       console.log("Weather Results--> Hike Location: "+resp.data.name+",  Temp: "+resp.data.main.temp);
        console.log('searched for a hike')
    }

    render() {
        return(
            <div className='container search'>
                <div className='row'>
                    <div className='col s8 push-s2'>
                        <Navbar />
                        <form noValidate onSubmit={this.onSubmit.bind(this)}>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.minLength}
                                    id="minLength"
                                    type="number"
                                />
                                <Label name='Minimum Hike Length' />
                            </div>
                            <div className="input-field col s12">
                                <select
                                onChange={this.onChange}
                                value={this.state.maxTravel}
                                id="maxTravel">
                                    <option value="">Select Maximum Distance to Trailhead</option>
                                    <option value= "5" >5 miles</option>
                                    <option value="10">10 miles</option>
                                    <option value="15">15 miles</option>
                                    <option value="25">25 miles</option>
                                    <option value="50">50 miles</option>
                                    <option value="100">100 miles</option>
                                </select>
                            </div>
                            <div className="input-field col s12">
                                <select
                                onChange={this.onChange}
                                value={this.state.maxElevation}
                                id="maxElevation">
                                >
                                    <option value="">Select Max Elevation Gain</option>
                                    <option value="100">100 ft</option>
                                    <option value="1000">1000 ft</option>
                                    <option value="2000">2000 ft</option>
                                    <option value="3000">3000 ft</option>
                                    <option value="4000">4000 ft</option>
                                    <option value="5000">5000 ft</option>
                                    <option value="6000">6000 ft</option>
                                    <option value="7000">7000 ft</option>
                                    <option value="8000">8000 ft</option>
                                    <option value="9000">9000 ft</option>
                                    <option value="10000">10000 ft</option>
                                </select>
                            </div>
                            <br />
                            <Button name='Search Hikes' type='submit' />
                        </form>
                        {this.state.isSubmitted && <Results
                            type='search-results'
                            dist={this.state.maxTravel}
                            length={this.state.minLength}
                            lat={this.state.latitude}
                            lon={this.state.longitude}
                            elev={this.state.maxElevation}
                            />}
                    </div>
                </div>
            </div>
        )        
    }
    
}


Search.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Search);

