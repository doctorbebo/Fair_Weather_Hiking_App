import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';

import HikeCard from '../results/hike_card';
import './style.css';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        let id = this.props.auth.user.id
        axios.get(`/api/users/favorite/${id}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                favorites: res.data
            })
        })
    }

    render() {
        return this.state.favorites.map(trail => {
            return <HikeCard id={trail.id}
            name={trail.name}
            difficulty={trail.difficulty}
            elevation={trail.elevation}
            imageURL={trail.imageURL}
            weather='clear'
            summary={trail.summary} />
        })
    }
}

Favorites.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Favorites);