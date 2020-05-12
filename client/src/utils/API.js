import axios from 'axios';

export default {

    searchHikes: function(lat, lon, length, dist, elev) {
        let resultQty = "&maxResults=10";
        let apiKey = "&key=200749828-0bd185ee7af374a0fb370047ff15cc20";
        let hikerequest = "https://cors-anywhere.herokuapp.com/https://www.hikingproject.com/data/get-trails?";
        let query = `${hikerequest}lat=${lat}&lon=${lon}&minLength=${length}&maxDistance=${dist}${resultQty}${apiKey}`;

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
    }

}
