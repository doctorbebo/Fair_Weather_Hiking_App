import React from 'react';

function Button(props) {
    return(
        <button
            style={{
                width: props.width,
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginBottom: "1rem"

            }}
            onClick={props.onClick}
            type={props.type}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
            {props.name}
        </button>
    )
}

export default Button;