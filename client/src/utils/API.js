import axios from 'axios';

export default {

    searchHikes: function(lat, lon, length, dist, elev, sort) {
        let resultQty = "&maxResults=10";
        let apiKey = process.env.REACT_APP_HIKING_PROJECT_API_KEY;
        
        let hikerequest = "https://cors-anywhere.herokuapp.com/https://www.hikingproject.com/data/get-trails?";
        let query = `${hikerequest}lat=${lat}&lon=${lon}&minLength=${length}&maxDistance=${dist}&sort=${sort}${resultQty}${apiKey}`;

        return axios.get(query)
                
    },

    addFavorite: function(hike) {

        console.log('hike id: ' + hike.id)

        axios.post('api/users/favorite', hike)
            .then(res => {console.log(res)})
            .catch(function (err) {
                console.log(err)
        });
    },

    displayFavorites: function(id) {
        return axios.get(`/api/users/favorite/${id}`)

    },

    deleteFavorite: function(id, userID) {
        console.log('userid: ' + userID)
        return axios.delete(`/api/users/delete/${id}/${userID}`)
    },
    deleteCompleted: function(day, userComment) {
        console.log("completed id: " +day +" user comment "+userComment)
        axios.delete(`/api/users/delete/${day}`)
    },

    getWeather: async function(hike){
        let weatherRequest = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?";
        let lat = "lat="+hike.latitude
        let lon = "&lon="+hike.longitude
        let units = "&units=imperial";
        let apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
        return axios.get(weatherRequest+lat+lon+units+apiKey)
    },

    getStats: function(userID) {
        console.log(userID)
        return axios.get(`/api/users/completed/${userID}`)
        //Completed.find({userID}) find all hikes user has completed
        //calculate stats. res.json to front end
    },

    addComplete: function(hike) {
        axios({
            url: 'api/users/completed', 
            method: 'post',
            data: hike
        })
            .then(res => {console.log(res)})
            .catch(function (err) {
                console.log(err)
        });
    },

    displayCompleted: function(id) {
        return axios.get(`/api/users/completed/${id}`)
    },
}

