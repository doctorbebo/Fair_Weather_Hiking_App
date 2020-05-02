import React from 'react';

function Input(props) {
    return(
        <input
            onChange={props.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            className={classnames("", {
            invalid: errors.password
            })}
        />
    )
}