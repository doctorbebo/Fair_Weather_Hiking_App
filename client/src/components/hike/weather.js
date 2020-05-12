import axios from 'axios'
import React, { Component } from 'react';

class Weather extends Component  {

    constructor() {
        super();
        this.state = {
            weather: []
        }
    }
    componentDidMount() {

    let weatherRequest = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?";
    // Temporary lat and lon
    let lat = "lat=47.4710016"
    let lon = "&lon=-122.2049792"
    let units = "&units=imperial";
    let apiKey = "&appid=af4b6cb437caa6db643b24a43b52989b";
    axios.get(weatherRequest+lat+lon+units+apiKey)
    .then(res =>{
        this.setState({
            weather: res.list
        })
          })
          .catch(function (error) {
            console.log(error)
        })
    }
}
export default Weather;