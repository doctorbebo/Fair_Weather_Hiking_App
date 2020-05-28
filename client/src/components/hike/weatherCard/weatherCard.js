import React from "react";
import moment from "moment";
import './style.css';


function WeatherCard(props) {
  return(
        <div>
            {props.forecast.map(day =>(
                <div key={day.dt} className = "col s12 m2 l2">
                    <div className="card">
                        <span className="card-date col s5 m4 l12">{
                            moment().add(props.forecast.indexOf(day), 'days').format('ddd')
                            }</span>
                        <div className="card-image weather-icon-div col s2 m4 l12">
                        <img src = {`http://openweathermap.org/img/w/`+ day.weather[0].icon + ".png"} alt= "weather-icon"></img>
                           
                        </div>
                        <div className="card-content s5 m4 l12">
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
