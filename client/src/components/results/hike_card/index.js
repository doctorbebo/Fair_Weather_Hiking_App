import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './style.css';
import API from '../../../utils/API';
import Weather from '../../../utils/weather'
import Moment from "moment"
import Modal from '../../completed/modal'
import Hike from '../../hike'
import { ConnectionStates } from "mongoose";

class HikeCard extends Component {

    constructor() {
        super();
        this.state = {
            show_more: false,
            forecast: [],
            bestDay: [],
            showModal: false,
            userComment: ""
            
        }
    }
    toggleModal = () => {
        this.setState({
          showModal: !this.state.showModal
        });
      }

      onChange = event => {
        console.log(event.target.value);
        this.setState({ userComment: event.target.value })
    }

    handleClick = event => {
        switch (event.currentTarget.id) {
            case "Add-to-favs":
                API.addFavorite(this.props);
                break;
            case "Mark-complete":
                    this.toggleModal()
                break;
            case 'delete-favorite':
                API.deleteFavorite(this.props.id);
            case "More-Info":
                let forecastData =[]
                API.getWeather(this.props)
                .then(res =>{
                    for ( let i = 4; i < 40; i=i+8)
                    {
                        forecastData.push(res.data.list[i]);
                    }
                    this.setState({forecast: forecastData});
                    return;
                }).then(() =>{
                    let bestTemp = Weather.getBestDay(this.state.forecast);
                    return bestTemp;
                })
                .then((bestTemp)=>{
                    let bestWeather = Weather.bestWeather(bestTemp);
                    return bestWeather;
                })
                .then((res)=>{
                    let sorted = Weather.weatherSort(res);
                    let bestWeather;
                    if(sorted.constructor === Array){
                        bestWeather = sorted;
                    } else{
                        bestWeather = [sorted];
                    }
                    this.setState({
                        bestDay: bestWeather,
                    })
                    return;
                }).then(()=>{
                    this.setState({show_more: true});
                    return;
                })
                .catch(function (error) {
                        console.log(error);
                })   
               
                
                break;
            case 'Less-Info':
                this.setState({show_more: false});
                break;
            case 'submit-complete':
                    let postedComment = {"userComment": this.state.userComment}
                    let completedHike = [this.props];
                    console.log(this.props)
                    completedHike.push(postedComment)
                    console.log(completedHike)
                    this.toggleModal();
                API.addComplete(completedHike)

            default:
                console.log(event.currentTarget);
                break;
        }
    }
    
render () {
    return (
        <div className="row">
             <Modal
          show={this.state.showModal}
          closeCallback={(e) => this.handleClick(e)}
          onChangeCallback={(e) => this.onChange(e)}
          customClass="custom_modal_class"
          commentText={this.state.userComment}
        ></Modal>
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
                                    <i className="material-icons">location_on</i> {this.props.location}
                                </div>
                            </div>
                        </div>
                    </a>

                    
                    {this.state.show_more && <Hike
                        forecast = {this.state.forecast}
                        bestDay = {this.state.bestDay}
                        summary ={this.props.summary}
                        
                    />}
                    <div className="card-action no-padding">
                            {this.props.type !== 'favorite-hikes' && <button className="btn-large btn-by3" id="Add-to-favs" onClick={(e) => this.handleClick(e)}>Add to Favorites <i className="small material-icons icon-yellow">star</i></button>}
                            {this.props.type !== 'completed-hikes' && <button className="btn-large btn-by3" id="Mark-complete" onClick={(e) => this.handleClick(e)}>Mark Complete <i className="small material-icons icon-green">check</i></button>}
                            {this.props.type == 'favorite-hikes' && <button className="btn-large btn-by3" id="delete-favorite" onClick={(e) => this.handleClick(e)}>Delete from Favorites <i className="small material-icons icon-red">delete_forever</i></button>}
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