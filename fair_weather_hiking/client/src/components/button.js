import React from 'react';

function Button(props) {
    return(
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
            {props.name}
        </button>
    )
}

export default Button;