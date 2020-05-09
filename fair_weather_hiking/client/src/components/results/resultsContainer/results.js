import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import HikeCard from '../hike_card/index';
import axios from 'axios';

class Results extends Component  {

    constructor() {
        super();
        this.state = {
            trails: []
        }
    }

    componentDidMount() {
        const { lat, lon, length, dist, elev } = this.props
        let resultQty = "&maxResults=10";
        let apiKey = "&key=200749828-0bd185ee7af374a0fb370047ff15cc20";
        let hikerequest = "https://cors-anywhere.herokuapp.com/https://www.hikingproject.com/data/get-trails?";
    
        let query = `${hikerequest}lat=${lat}&lon=${lon}&minLength=${length}&maxDistance=${dist}${resultQty}${apiKey}`;
        console.log(query)
        axios.get(query)
            .then(res => {
                this.setState({
                    trails: res.data.trails
                })
            })
    }
    
    render() {
        return this.state.trails.map(trail => {
            console.log(trail)
            return <HikeCard id={trail.id}
            name={trail.name}
            difficulty={trail.difficulty}
            elevation={trail.high}
            imageURL={trail.imgMedium}
            weather='clear'
            summary={trail.summary} />
        })
    }
}

export default Results;