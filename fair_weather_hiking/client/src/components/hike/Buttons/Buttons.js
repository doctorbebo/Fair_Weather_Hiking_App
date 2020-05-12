import React from "react";


function Buttons(props) {
  return(
    <div className = "container">
        <div className = "row">
          <div className ="col l4 s4">
            <button>Add to Favorites</button>
          </div>
          <div className ="col l4 s4">
            <button>Mark as Complete</button>
          </div>
          <div className ="col l4 s4">
            <button>Return to Search</button>
          </div>
        </div>
      </div>

  ) 
}

export default Buttons;
