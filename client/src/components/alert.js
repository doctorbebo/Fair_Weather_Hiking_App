import React from 'react';

export default function Alert(props) {
    console.log(props.page)
    let text;

    switch (props.page) {
        case 'search-results':
            text = 'No Hikes Found! Please change search criteria'
            break;
        case 'favorites':
            text = 'No favorite hikes yet!'
            break;
        case 'completed':
            text = 'No completed hikes yet!'
            break;
        case 'invalid zip':
            text = 'Please enter a valid zip!'
            break;
        default:
            break;
    }
    return(
        <div className="alert">
            {text}
        </div>
    )
}