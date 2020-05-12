import React, { Component } from "react";
import WeatherCard from "../hike/weatherCard/weatherCard"
import BestDay from "../hike/BestDay/BestDay"
import Buttons from "../hike/Buttons/Buttons"
import Reports from "../hike/reports/reports"
import axios from 'axios';

class Hike extends Component {
  // Setting this.state.friends to the friends json array
  state = {
// <<<<<<< new_weather
//     weather: []
// =======
//     weather: {}
// >>>>>>> master
//   };

    getWeather = () => {

//     let lat = 39.9787;
// <<<<<<< new_weather
//     let lon = -105.2755; 
//     let units = "&units=imperial";       
//     let APIKey = "e1ded9334debf557f66848e3668d8c49";
//     let queryURL = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}${units}&appid=${APIKey}`
// =======
//     let lon = -105.2755;        
//     let APIKey = "e1ded9334debf557f66848e3668d8c49";
//     let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
// >>>>>>> master
    
    // Here we run our AJAX call to the OpenWeatherMap API
    return axios.get(queryURL)
    // We store all of the retrieved data inside of an object called "response"
    .then(response => {
    //     let latitude = response.city.coord.lat;
    //     let longitude = response.city.coord.lon;
    //     let weatherIcon = "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png";
        
        
    //   for (let i = 7; i < 40; i=i+8){
    //     // Create button element 
    //     let icon = response.list[i].weather[0].icon;
    //     let iconURL = "http://openweathermap.org/img/w/" + icon + ".png"

    //   }
      // Log the resulting object
      console.log(response);
    });
}



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
     
    return (
        <div >
            <div className="row">
                <div className="col l12 m12 s12 center-align">
                        <h2 className = "hike_name">Bear Peak Out and Back</h2>
                        <div className="image">
                            <img className="center-align" width="650" src="https://cdn-files.apstatic.com/hike/7005382_medium_1554312030.jpg"></img>
                        </div>
                        
                        <h4>5-Day Forcast:</h4>
                        <div className = "row">
                            <div className = "col s1 m1 12"></div>
                            <WeatherCard getWeather = {this.getWeather}></WeatherCard>
                            <WeatherCard></WeatherCard>
                            <WeatherCard></WeatherCard>
                            <WeatherCard></WeatherCard>
                            <WeatherCard></WeatherCard>
                        </div>
                        <h4>Best Day:</h4>
                        <div className = "row">
                            <BestDay></BestDay>
                        </div>
                        <h4>Trail Reports:</h4>
                        <div className = "row">
                            <Reports></Reports>
                        </div>
                        <div className = "row">
                            <Buttons></Buttons>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

export default(Hike) ;

// const location = "seattle"
// let APIKey = "e1ded9334debf557f66848e3668d8c49";
// let queryURL = "https://api.openweathermap.org/data/2.5/forecast?" +
// "q=" + location + "&units=imperial&appid=" + APIKey;