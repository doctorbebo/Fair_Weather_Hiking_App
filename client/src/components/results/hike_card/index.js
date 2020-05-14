import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './style.css';
import API from '../../../utils/API';

import Hike from '../../hike/index'

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
                console.log("More-Info");
                console.log(this.props);
                //API.getWeather()
                console.log("load index page");    
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
                            <span className="card-title bg">{this.props.name}
                            {/* <br />
                            {this.props.location} */}
                            </span>
                        </div>
                        <div className="card-content" id="to-index-page"onClick={(e) => this.handleClick(e)}>
                            <div className = "info-text">
                                <div className="three-cols">Length: {this.props.length} miles
                                    <br />
                                    Elevation gain: {this.props.ascent} ft
                                </div>
                                <div className="three-cols">Difficulty: {this.props.difficulty}</div>
                                <div className="three-cols">
                                    <i class="material-icons">location_on</i> {this.props.location}
                                </div>
                            </div>
                        </div>
                    </a>

                    
                    {this.state.show_more && <Hike/>}
                    <div className="card-action no-padding">
                            {this.props.type !== 'favorite-hikes' && <button className="btn-large btn-by3" id="Add-to-favs" onClick={(e) => this.handleClick(e)}>Add to Favorites <i className="small material-icons icon-yellow">star</i></button>}
                            {this.props.type !== 'completed-hikes' && <button className="btn-large btn-by3" id="Mark-complete" onClick={(e) => this.handleClick(e)}>Mark Complete <i className="small material-icons icon-green">check</i></button>}
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