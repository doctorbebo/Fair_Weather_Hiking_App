import React, { Component } from 'react';
import Button from './button';
import Label from './label';

import M from 'materialize-css';

import addFavorite from './favorites/addFavorite'
;

const data = {
    email: 'sarahmarie.carter@yahoo.com',
    password: 'test123'
}

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
          maxTravel: ""
        };
      }

    onChange = event => {
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this);
        addFavorite(data);

        // const data = {
        //     maxDistance: this.state.maxDistance,
        //     maxElevation: this.state.maxElevation
        // }

        //const query = 
        //this.props.searchHikes(query)
        //api call to get hikes with criteria
        console.log('searched for a hike')
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
                                    id=""
                                />
                                <Label name='Max Distance Travelled' />
                            </div>
                            <div className="input-field col s12">
                                <select>
                                    <option value="" disabled selected>Select Max Length</option>
                                    <option value="1">1 mile</option>
                                    <option value="2">2 mile</option>
                                    <option value="3">3 mile</option>
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