import React from 'react';
import Results from '../pages/results';
import Navbar from '../navbar';

import './style.css'

function CompletedContainer() {
    return <div>
        <div className='row'>
            <Navbar page='completed' />
        </div>    
        <div className='completed index-card-bg'>
            <div className='col s8 offset-s2'>
                <Results type='completed-hikes'/>
            </div>
        </div>
    </div>
    

}

export default CompletedContainer;