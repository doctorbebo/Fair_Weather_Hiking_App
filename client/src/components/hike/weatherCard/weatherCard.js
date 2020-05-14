import React from "react";


function WeatherCard(props) {
  return(
        <div>
            <div className = " col s2 m2 l2 ">
                <div className="card">
                    <div className="card-image weather-icon-div">
                     Img here 
                        
                    </div>
                    <div className="card-content">
                        <div className = "info-text align-left">
                        Temp: 
                            <br/>
                        Condition: 

                        </div>
                    </div> 
                </div>                 
            </div>
        </div>

  ) 
}

export default WeatherCard;
