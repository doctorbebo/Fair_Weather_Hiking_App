import axios from 'axios';
import Search from '../search'

``
function Weather() {
    axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?lat=47.691&lon=-122.349&units=imperial&appid=af4b6cb437caa6db643b24a43b52989b`)
                .then(res =>{
                console.log(res.list);
            })
            .catch(function (error) {
                console.log(error)
            })
        }

export default Weather`