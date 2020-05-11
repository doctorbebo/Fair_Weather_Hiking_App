import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './style.css';
import addFavorite from '../../favorites/addFavorite';

class HikeCard extends Component {

    handleClick = event =>
    {
        if(event.currentTarget.id === "to-index-page")
        {
            console.log("load index page");
        }else if(event.currentTarget.id === "Add-to-favs")
        {

            console.log("Add to Favs");
            addFavorite(this.props)

        }else if(event.currentTarget.id === "Mark-complete")
        {
            console.log("Mark complete");

        }else
        {
            console.log(event.currentTarget);
        }
    }
    
render () {
    const { user } = this.props.auth;
    const data = {
        userID: user.id
    }
    console.log(data);
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
                                <div className="three-cols">Difficulty: {this.props.difficulty}</div>
                                <div className="three-cols">Difficulty: {this.props.difficulty}</div>
                                <div className="three-cols">Difficulty: {this.props.difficulty}</div>
                            </div>
                        </div>
                    </a>
                    <div className="card-action no-padding">
                            <a className="btn-large btn-by2" id="Add-to-favs" onClick={(e) => this.handleClick(e)}>Add to Favorites</a>
                            <a className="btn-large btn-by2" id="Mark-complete" onClick={(e) => this.handleClick(e)}>Mark Complete</a>
                    </div>
                </div>
            </div>
        </div>
    )


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


// () => addFavorite(data, this.props.id
