import React from 'react';
import Results from '../pages/results';
import Navbar from '../navbar';

function FavoriteContainer() {
    return <div className='container'>
        <div className='row'>
            <Navbar />
        </div>
        <div className='row'>
            <div className='col s8 offset-s2'>
                <Results type='favorite-hikes'/>
            </div>
        </div>
    </div>
}

export default FavoriteContainer;