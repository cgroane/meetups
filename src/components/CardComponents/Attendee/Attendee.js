import React from 'react';
import './Attendee.css';

const Attendee = (props) => {
    return (
        <div className="flex-r attendee grid-item" >
            <img src={props.photo} />
            <div>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}
export default Attendee;