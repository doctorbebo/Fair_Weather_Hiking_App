import React from 'react';
import Results from '../pages/results';
import Navbar from '../navbar';

function CompletedContainer() {
    return <div className='container'>
        <div className='row'>
            <Navbar />
        </div>
        <div className='row'>
            <div className='col s8 offset-s2'>
                <Results type='completed-hikes'/>
            </div>
        </div>
    </div>
}

export default CompletedContainer;