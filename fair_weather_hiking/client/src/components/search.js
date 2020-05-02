import React, { Component } from 'react';
import Button from './button';
import Label from './label';

class Search extends Component {

    constructor() {
        super();
        this.state = {
          maxDistance: "",
          maxElevation: ""
        };
      }

    onChange = event => {
        //console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value })
        //console.log(event.target.id)
    }

    onSubmit(event) {
        event.preventDefault();
        const data = {
            maxDistance: this.state.maxDistance,
            maxElevation: this.state.maxElevation
        }
        console.log('data: ' + data);
        //const query = 
        //this.props.searchHikes(query)
        //api call to get hikes with criteria
        console.log('searched for a hike')
    }

    render() {
        return(
            <div className='container'>
                <h4>Welcome to the search form page</h4>
                <div className='row'>
                    <div className='col s8 offset-s2'>
                        <form noValidate onSubmit={this.onSubmit}>
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