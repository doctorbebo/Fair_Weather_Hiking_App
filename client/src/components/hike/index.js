import React, { Component } from "react";
import WeatherCard from "./weatherCard/weatherCard"
import BestDay from "./BestDay/BestDay"
import Summary from "./Summary/summary"


class Hike extends Component {
  render() {
    return (
        <div >
            <div className="row">
                <div className="col l12 m12 s12 center-align">
                    <div className='summary'>
                      <h6>Summary:</h6>
                      <div className = "row">
                        <Summary 
                          summary = {this.props.summary}
                        ></Summary>
                      </div>
                    </div>
                  <h6>5-Day Forecast:</h6>
                  <div className = "row">
                      <div className = "col s1 m1 12"></div>
                      <WeatherCard forecast = {this.props.forecast}></WeatherCard>

                  </div>
                  <div className='summary'>
                    <h6>Best Day:</h6>
                    <div className = "row">
                        <BestDay 
                          bestDay = {this.props.bestDay}
                        ></BestDay>
                    </div>
                  </div>
                  <br />
              </div>
          </div>
      </div>
        );
    }
  }

export default(Hike) ;
