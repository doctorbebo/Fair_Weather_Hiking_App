import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import HikeCard from '../hike_card/index';
import axios from 'axios';

const Results = () =>  {

    const {lat, lon, length, dist, elev} = useParams();
    let resultQty = "&maxResults=10";
    let apiKey = "&key=200749828-0bd185ee7af374a0fb370047ff15cc20";
    let hikerequest = "https://cors-anywhere.herokuapp.com/https://www.hikingproject.com/data/get-trails?";

    let query = `${hikerequest}lat=${lat}&lon=${lon}&minLength=${length}&maxDistance=${dist}${resultQty}${apiKey}`;
    
    console.log('query: ' + query)

    return axios.get(query)
        .then(res => {
            const trails = res.data.trails;
            trails.map(trail => {
                const hikeData = {
                    id: trail.id,
                    name: trail.name,
                    difficulty: trail.difficulty,
                    elevation: trail.high,
                    imageURL: trail.imgMedium,
                    weather: 'clear',
                    summary: trail.summary
                }
                return <HikeCard hikeData = {hikeData}/>
            })            
        })
}

    // Fake hike data for testing replace with real data. 
    // const hikeData = {
    //     id: 1234,
    //     name: "Hike Name",
    //     difficulty: "Test Easy",
    //     distance: 100, 
    //     elevation: 1000,
    //     imageURL: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
    //     weather: "clear",
    //     summary: "This is a summary of the hike with details about the hike. It will include details the hike. Is the hike in the forest? Maybe it's by a beach?"
    // }


    // return(
    //     <div className='container'>
    //         <HikeCard hikeData = {hikeData} />;
    //     </div>
    //     )

export default Results;