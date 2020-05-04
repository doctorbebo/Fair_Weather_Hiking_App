import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import Label from './label';
import Results from './results/resultsContainer/results';

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
          maxLength: "",
          maxElevation: "",
          maxTravel: "",
          isSubmitted: false
        };
      }

    onChange = event => {
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();

        this.setState({
            isSubmitted: true
        })
        console.log('searched for a hike')
    }

    render() {
        return(
            <div className='container search'>
                <div className='row'>
                    <div className='col s8 offset-s2'>
                        <form noValidate onSubmit={this.onSubmit.bind(this)}>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.maxTravel}
                                    id="maxTravel"
                                    type= 'number'
                                />
                                <Label name='Max Travel Distance' />
                            </div>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.maxLength}
                                    id="maxLength"
                                    type='number'
                                />
                                <Label name='Select Max Hike Length' />
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
                            <Button name='Search Hikes' onClick={this.onClick} type='submit' />
                        </form>
                        {this.state.isSubmitted && <Results distance={this.state.maxTravel} length={this.state.maxLength}/>}
                    </div>
                </div>
            </div>
        )        
    }
    
}

export default Search;