import React, { Component } from "react";
import WeatherCard from "./weatherCard/weatherCard"
import BestDay from "./BestDay/BestDay"
import Reports from "./reports/reports"

class Hike extends Component {
  // To access state from parrent use this.props."bla"
  // Map through the props.weather 
  render() {
    return (
        <div >
            <div className="row">
                <div className="col l12 m12 s12 center-align">      
                  <h6>5-Day Forcast:</h6>
                  <div className = "row">
                      <div className = "col s1 m1 12"></div>
                      <WeatherCard forecast = {this.props.forecast}></WeatherCard>

                  </div>
                  <h6>Best Day:</h6>
                  <div className = "row">
                      <BestDay bestDay = {this.props.bestDay}></BestDay>
                  </div>
                  <h6>Trail Reports:</h6>
                  <div className = "row">
                      <Reports></Reports>
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