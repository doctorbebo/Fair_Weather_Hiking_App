import React, { Component } from 'react';
import Button from './button';

class Search extends Component {

    onSubmit(event) {
        event.preventDefault();
        //api call to get hikes with criteria
        console.log('searched for a hike')
    }

    render() {
        return(
            <div className='search-form'>
                <h4>Welcome to the search form page</h4>
                <form onSubmit={this.onSubmit}>
                
                    <Button name='Search' />

                </form>
            </div>
    
            //create form here that allows user to search for hikes within radius
            //on submit, take user to results page
        )        
    }
    
}

export default Search;