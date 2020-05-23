import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import HikeCard from '../results/hike_card/index';
import Alert from '../alert';
import API from '../../utils/API';

class Results extends Component  {

    constructor() {
        super();
        this.state = {
            trails: [],
            noTrails: false,
            loading: true
        }
    }

    componentDidMount() {
        if(this.props.type === 'search-results') {
            const { lat, lon, length, dist, elev } = this.props
            API.searchHikes(lat, lon, length, dist, elev)
            .then(res => {
                if(res.data.trails.length === 0) {
                    this.setState({
                        noTrails: true
                    })
                }
                // console.log(res.data.trails.length)
                else if(elev !== null){
                    const filteredHikes = res.data.trails.filter(trail => trail.ascent < elev)
                    this.setState({
                        trails: filteredHikes,
                        loading: false
                    })
                } else {
                    this.setState({
                        trails: res.data.trails,
                        loading: false
                    })
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
            <div>
                {this.state.loading &&
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div> }
                {this.state.trails.map(trail => {
                    //console.log(trail)
                    return <HikeCard type={this.props.type}
                    key={trail.id}
                    name={trail.name}
                    difficulty={trail.difficulty}
                    location={trail.location}
                    summary={trail.summary}
                   
                    high={trail.high}
                    ascent={trail.ascent}
                    imgMedium={trail.imgMedium}
                    length={trail.length}

                    summary={trail.summary} 
                    latitude ={trail.latitude}
                    longitude = {trail.longitude}/>
                })}
                {this.state.noTrails &&  <Alert />}
            </div>
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