import React from 'react';

export default function Alert(props) {
    console.log(props.type)
    let text;

    switch (props.type) {
        case 'search-results':
            text = 'No Hikes Found! Please change search criteria'
            break;
        case 'favorite-hikes':
            text = 'No favorite hikes yet!'
            break;
        case 'completed-hikes':
            text = 'No completed hikes yet!'
        default:
            break;
    }
    return(
        <div className="alert">
            {text}
        </div>
    )
}