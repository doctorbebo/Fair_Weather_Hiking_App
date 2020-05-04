import React, { Component } from 'react';
import HikeCard from '../hike_card/index';

class Results extends Component {

    //api call here

    render() {
        console.log(this.props)

    // Fake hike data for testing replace with real data. 
    const hikeData = {
        id: 1234,
        name: "Hike Name",
        difficulty: "Test Easy",
        distance: 100, 
        elevation: 1000,
        imageURL: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
        weather: "clear",
        summary: "This is a summary of the hike with details about the hike. It will include details the hike. Is the hike in the forest? Maybe it's by a beach?"
    }


    return(
        <div className='container'>
            <HikeCard hikeData = {hikeData} />;
        </div>
        )
    }
}

export default Results;