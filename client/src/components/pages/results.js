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
        if(this.props.type === 'search-results') {
            const { lat, lon, length, dist, elev } = this.props
            API.searchHikes(lat, lon, length, dist, elev)
            .then(res => {
                if(res.data.trails.length === 0) {
                    this.setState({
                        noTrails: true
                    })
                }
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
                .then(res => {
                    if(res.data == '') {
                        console.log('no favorites')
                        this.setState({
                            page: 'favorites',
                            noTrails: true,
                            loading: false
                        })
                    }
                    else {
                        this.setState({
                            trails: res.data,
                            loading: false
                        })
                    }
                })
        }
        else if(this.props.type === 'completed-hikes') {
            console.log(this.props)
            let id = this.props.auth.user.id
            API.displayCompleted(id)
                .then(res => {
                    if(res.data == '') {
                        this.setState({
                            page: 'completed',
                            noTrails: true,
                            loading: false
                        })
                    }
                    else {
                        this.setState({
                            trails: res.data,
                            loading: false
                        })
                    }
                })
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
