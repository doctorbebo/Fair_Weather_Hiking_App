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

        let useResults = (res, page) => {
            if(res.data == '' || res.data.trails.length === 0) {
                console.log('no favorites')
                this.setState({
                    page: page, //need page to determine which alert will be used for no results
                    noTrails: true,
                    loading: false
                })
            }
            else {this.setState({ trails: res.data, loading: false })
            }
        }

        switch (this.props.type) {
            case 'search-results':
                const { lat, lon, length, dist, elev } = this.props
                API.searchHikes(lat, lon, length, dist, elev)
                    .then(res => {
                        if(elev !== null){
                            const filteredHikes = res.data.trails.filter(trail => trail.ascent < elev)
                            this.setState({
                                trails: filteredHikes,
                                loading: false
                            })
                        }
                        else {useResults(res, '')} 
                    })
                break;
            case 'favorite-hikes':
                API.displayFavorites(id)
                    .then(res => {useResults(res, 'favorites')})
                break;
            case 'completed-hikes':
                API.displayCompleted(id)
                    .then(res => {useResults(res, 'completed')})
                break;       
            default:
                break;
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
                    return <HikeCard type={this.props.type}
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
