import React from 'react';

function Label(props) {
    return(
        <label htmlFor={props.name}>{props.name}</label>
    )
}

export default Label;