import React from 'react';
import Favorites from './favoriteCards';

function FavoriteContainer() {
    return <div className='row'>
        <div className='col s6 offset-s3'>
            <Favorites />
        </div>
    </div>
}

export default FavoriteContainer;