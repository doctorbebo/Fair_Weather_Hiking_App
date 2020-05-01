import React, { Component } from 'react';

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
                
                    <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                    Search
                    </button>
                    
                </form>
            </div>
    
            //create form here that allows user to search for hikes within radius
            //on submit, take user to results page
        )        
    }
    
}

export default Search;