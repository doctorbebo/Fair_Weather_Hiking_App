import React from "react";
import moment from "moment";
import './style.css';


function WeatherCard(props) {
  return(
        <div>
            {props.forecast.map(day =>(
                <div key={day.dt} className = "col s2 m2 l2">
                    <div className="card">
                        <span className="card-date">{
                            moment().add(props.forecast.indexOf(day), 'days').format('l')
                            }</span>
                        <div className="card-image weather-icon-div">
                        <img src = {`http://openweathermap.org/img/w/`+ day.weather[0].icon + ".png"} alt= "weather-icon"></img>
                           
                        </div>
                        <div className="card-content">
                            <div className = "info-text align-left">
                                {Math.trunc(day.main.temp)}&deg;F
                            </div>
                        </div> 
                    </div>                 
                </div>
            ))}
            
        </div>

  ) 
}

export default WeatherCard;
