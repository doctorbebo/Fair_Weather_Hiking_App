import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import axios from 'axios';
import HikeCard from '../hike_card/index';

class Results extends Component  {

    constructor() {
        super();
        this.state = {
            trails: []
        }
    }

    componentDidMount() {
        if(this.props.type === 'search-results') {
            const { lat, lon, length, dist, elev } = this.props
            let resultQty = "&maxResults=10";
            let apiKey = "&key=200749828-0bd185ee7af374a0fb370047ff15cc20";
            let hikerequest = "https://cors-anywhere.herokuapp.com/https://www.hikingproject.com/data/get-trails?";
        
            let query = `${hikerequest}lat=${lat}&lon=${lon}&minLength=${length}&maxDistance=${dist}${resultQty}${apiKey}`;
            //console.log(query)
            axios.get(query)
                .then(res => {
                    //console.log(res.data.trails)
                    this.setState({
                        trails: res.data.trails
                    })
                })
        }
        else if(this.props.type === 'favorite-hikes') {
            let id = this.props.auth.user.id
            axios.get(`/api/users/favorite/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    trails: res.data
                })
            })
        }
        
    }

    render() {
        return this.state.trails.map(trail => {
            console.log(trail)
            return <HikeCard id={trail.id}
            name={trail.name}
            difficulty={trail.difficulty}
            elevation={trail.high}
            imgMedium={trail.imgMedium}
            length={trail.length}
            summary={trail.summary} />
        })
    }
}

Results.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Results);