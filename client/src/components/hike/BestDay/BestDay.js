import React from "react";
import Moment from "moment";


function BestDay(props) {

  return(
        <div>
            We recommend you go hiking on... {Moment(props.bestDay[0].dt_txt).subtract(1, 'day').format('dddd')}!
            <br></br>
            It will feel like {parseInt(Math.trunc(props.bestDay[0].main.feels_like))}&deg;F with {props.bestDay[0].weather[0].description}.
           
        </div>

  ) 
}

export default BestDay;