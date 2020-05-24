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
            loading: true,
            page: ''
        }
    }

    componentDidMount() {

        let id = this.props.auth.user.id

        //function that sets state of component with results of api call
        let useResults = (trailList, page) => {
            if(trailList == '' || trailList.length === 0) {
                this.setState({
                    page: page, //need page to determine which alert will be used for no results
                    noTrails: true, //alerts user that no trails were found
                    loading: false //removes loading bar
                })
            } else {this.setState({ trails: trailList, loading: false })}
        }

        switch (this.props.type) {
            case 'search-results':
                const { lat, lon, length, dist, elev } = this.props
                API.searchHikes(lat, lon, length, dist, elev)
                    .then(res => {
                        if(elev !== null){
                            const filteredHikes = res.data.trails.filter(trail => trail.ascent < elev)
                            useResults(filteredHikes, 'search-results')
                        }
                        else {useResults(res.data.trails, 'search-results')}
                    })
                    console.log(this.props)
                break;
            case 'favorite-hikes':
                //api call to favorites database, finds all hikes correlated with user id
                API.displayFavorites(id)
                    .then(res => {
                        //console.log(res.data)
                        useResults(res.data, 'favorites')
                    })
                break;
            case 'completed-hikes':
                //api call to completed database, finds all hikes correlated with user id
                API.displayCompleted(id)
                    .then(res => {useResults(res.data, 'completed')})
                break;       
            default:
                break;
        }
    }

    render() {
        return(
            <div>
                {/* materialize loading bar for when hikes are loading */}
                {this.state.loading &&
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div> }
                {/* map the array of trails, create hikecard component for each trail */}
                {this.state.trails.map(trail => {
                    return <HikeCard type={this.props.type}
                    id={trail.id}
                    key={trail.id}
                    name={trail.name}
                    difficulty={trail.difficulty}
                    location={trail.location}
                    summary={trail.summary} 
                    latitude ={trail.latitude}
                    longitude = {trail.longitude}
                    userComment = {trail.userComment}
                    high={trail.high}
                    ascent={trail.ascent}
                    imgMedium={trail.imgMedium}
                    length={trail.length}
                    />
                })}
                {/* Alert user when no trails are found. Alert text changes depending on which results are being displayed */}
                {this.state.noTrails &&  <Alert page={this.state.page}/>}
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
