import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './style.css';
import API from '../../../utils/API';

import Hike from '../../hike'

class HikeCard extends Component {

    constructor() {
        super();
        this.state = {
            show_more: false,
            forecast: []
        }
    }
    
    handleClick = event => {
        switch (event.currentTarget.id) {
            case "Add-to-favs":
                API.addFavorite(this.props);
                break;
            case "Mark-complete":
                API.addComplete(this.props);
                break;

            case "More-Info":
                let forecastData =[]
                API.getWeather(this.props)
                .then(res =>{
                    for ( let i = 4; i < 40; i=i+8){
                        forecastData.push(res.data.list[i])
                    }
                    this.setState({forecast: forecastData})  
                    console.log(this.state.forecast)
                    
                    })
                    .catch(function (error) {
                        console.log(error)
                    })   
                this.setState({show_more: true});
                break;
            case 'Less-Info':
                this.setState({show_more: false});
                break;

            default:
                console.log(event.currentTarget);
                break;
        }
    }
    
render () {
    return (
        <div className="row">
            <div className="col s12 m12 l12">
                <div className="card hoverable">
                    <a>
                        <div className="card-image" id="to-index-page" onClick={(e) => this.handleClick(e)}>
                            <img  src={this.props.imgMedium} alt = "hike"/>
                            <span className="card-title bg">{this.props.name}</span>
                        </div>
                        <div className="card-content" id="to-index-page"onClick={(e) => this.handleClick(e)}>
                            <div className = "info-text">
                                <div className="three-cols">Length: {this.props.length} miles</div>
                                <div className="three-cols">

                                    Highest Point: {this.props.high} ft

                                    <br />
                                    Elevation gain: {this.props.ascent}
                                </div>
                                <div className="three-cols">Difficulty: {this.props.difficulty}</div>
                            </div>
                        </div>
                    </a>

                    
                    {this.state.show_more && <Hike
                        forecast = {this.state.forecast}
                    />}
                    <div className="card-action no-padding">
                            {this.props.type !== 'favorite-hikes' && <button className="btn-large btn-by3" id="Add-to-favs" onClick={(e) => this.handleClick(e)}>Add to Favorites <i className="small material-icons icon-yellow">star</i></button>}
                            <button className="btn-large btn-by3" id="Mark-complete" onClick={(e) => this.handleClick(e)}>Mark Complete <i className="small material-icons icon-green">check</i></button>
                            {!this.state.show_more && <button className="btn-large btn-by3" id="More-Info" onClick={(e) => this.handleClick(e)}>Show More<i className="small material-icons icon-white">expand_more</i></button>}
                            {this.state.show_more && <button className="btn-large btn-by3" id="Less-Info" onClick={(e) => this.handleClick(e)}>Show Less<i className="small material-icons icon-white">expand_less</i></button>}

                    
                    </div>
                </div>
            </div>
        </div>
    )}
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