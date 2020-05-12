import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './style.css';
import addFavorite from '../../favorites/addFavorite';

class HikeCard extends Component {
    
render () {
    const { user } = this.props.auth;
    const data = {
        userID: user.id
    }
    console.log(data);
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="weather-icon-div">
                        <img className="weather-icon bg" src={process.env.PUBLIC_URL + `./assets/images/icons/weather/${this.props.hikeData.weather}.png`} alt = "hike" />
                    </div>
                    <div className="card-image">
                        <img src={this.props.hikeData.imageURL} alt = "hike"/>
                        <span className="card-title bg">{this.props.hikeData.name}</span>
                    </div>
                    <div className="card-content">
                        <div className = "info-text">
                            <div className="three-cols">Difficulty: {this.props.hikeData.difficulty}</div>
                            <div className="three-cols">Distance: {this.props.hikeData.distance} ml.  </div> 
                            <div className="three-cols">Elevation: {this.props.hikeData.elevation} ft. </div>
                        </div>
                    </div>
                    <div className="card-action">
                    <a href="https://www.hikingproject.com/">This is a Link to hikingproject.com</a>
                    <button id={this.props.hikeData.id} onClick={() => addFavorite(data, this.props.hikeData.id)}>Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )

    //send hike id to hike card as props.id
    //need favorite button with id of props.id
    
    
    
    // return (
    //     <div className="border border-dark">
    //         <img src={process.env.PUBLIC_URL + `./assets/images/icons/weather/${props.hikeData.weather}.png`} />;
    //         <h1>Hello this is a hike card</h1>
    //     </div>
    // );
    }
}

HikeCard.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
auth: state.auth
});
  
export default connect(
mapStateToProps
)(HikeCard);
