import React from 'react';

function Input(props) {
    let title = props.name;
    return(
        <input
            onChange={props.onChange}
            value={props.value}
            error={errors.title}
            id={title}
            type={title}
            className={classnames("", {
            invalid: errors.title
            })}
        />
    )
}

export default Input;