import React from 'react';
//import Favorites from './favoriteCards';
import Results from '../results/resultsContainer/results'

function FavoriteContainer() {
    return <div className='row'>
        <div className='col s6 offset-s3'>
            <Results type='favorite-hikes'/>
        </div>
    </div>
}

export default FavoriteContainer;