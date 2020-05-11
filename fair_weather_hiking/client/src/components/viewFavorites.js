import React from 'react';
import axios from 'axios';

function viewFavorites(id) {
    //console.log(id);
    axios.get(`/api/users/favorite/${id}`)
    .then(res => {
        console.log('recieved favorites')
    })
}

export default viewFavorites;