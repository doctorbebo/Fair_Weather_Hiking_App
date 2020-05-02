import React, { Component } from 'react';
import Button from './button';
import Label from './label';
import axios from 'axios';

import M from 'materialize-css';

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//   });

class Search extends Component {
    //initialize Materialize
    componentDidMount() {
        M.AutoInit();
       
    }

    constructor() {
        super();
            this.state = {
            maxDistance: "",
            maxElevation: "",
            maxTravel: "",
            latitude: "",
            longitude: ""
            };
            this.onSubmit=this.onSubmit.bind(this);
            this.getuserlocation();
            
      }
    getuserlocation = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.setState({latitude: position.coords.latitude})
            this.setState({longitude: position.coords.longitude})
          });
      }

    onChange = event => {
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value })
    }

     async onSubmit(event) {
        event.preventDefault();
        
        let minLength = "&minLength="+this.state.maxDistance;
        let maxDistance = "&maxDistance="+this.state.maxTravel;
        let maxElevation = this.state.maxElevation
        let apiKey = "&key=200742179-23d7c8d71039f659f6a08818dd8bf810"
        let hikerequest = "https://cors-anywhere.herokuapp.com/https://www.hikingproject.com/data/get-trails?"
        console.log(hikerequest+this.state.latitude+this.state.longitude+minLength+maxDistance+apiKey)
        await axios.get(hikerequest+this.state.latitude+this.state.longitude+minLength+maxDistance+apiKey)
        .then(res => {
          const hikesData = res.data;
          console.log(hikesData)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className='container search'>
                <div className='row'>
                    <div className='col s8 offset-s2'>
                        {/* <form noValidate onSubmit={this.onSubmit}>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.maxDistance}
                                />
                                <Label name='Max Distance' />
                            </div>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.maxElevation}
                                />
                                <Label name='Max Elevation' />
                            </div>
                            <br />
                            <Button name='Search' />
                        </form> */}
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.maxDistance}
                                    id="maxDistance"
                                />
                                <Label name='Max Distance Travelled' />
                            </div>
                            <div className="input-field col s12">
                                <select
                                onChange={this.onChange}
                                value={this.state.maxTravel}
                                id="maxTravel">
                                    <option value="" disabled selected>Select Max Length</option>
                                    <option value= "5" >5 miles</option>
                                    <option value="10">10 miles</option>
                                    <option value="15">15 miles</option>
                                </select>
                            </div>
                            <div className="input-field col s12">
                                <select>
                                    <option value="" disabled selected>Select Max Elevation Gain</option>
                                    <option value="1">1000 ft</option>
                                    <option value="2">2000 ft</option>
                                    <option value="3">3000 ft</option>
                                </select>
                            </div>
                            <br />
                            <Button name='Search' type='submit' />
                        </form>
                    </div>
                </div>
            </div>
    
            //create form here that allows user to search for hikes within radius
            //on submit, take user to results page
        )        
    }
    
}

export default Search;