import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import HikeCard from '../results/hike_card/index';
import API from '../../utils/API';

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
            API.searchHikes(lat, lon, length, dist, elev)
            .then(res => {
                if(elev !== null){
                    const filteredHikes = res.data.trails.filter(trail => trail.ascent < elev)
                    this.setState({ trails: filteredHikes})
                } else {
                    this.setState({trails: res.data.trails})
                }
            })
        }
        else if(this.props.type === 'favorite-hikes') {
            let id = this.props.auth.user.id
            API.displayFavorites(id)
                .then(res => {this.setState({trails: res.data})})
        }
        else if(this.props.type === 'completed-hikes') {
            let id = this.props.auth.user.id
            API.displayCompleted(id)
                .then(res => {this.setState({trails: res.data})})
        }
    }

    render() {
        return(
            this.state.trails.map(trail => {
                //console.log(trail)
                return <HikeCard id={trail.id}
                name={trail.name}
                difficulty={trail.difficulty}
                elevation={trail.high}
                ascent={trail.ascent}
                imgMedium={trail.imgMedium}
                length={trail.length}
                summary={trail.summary} 
                latitude ={trail.latitude}
                longitude = {trail.longitude}/>
            })
        ) 
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