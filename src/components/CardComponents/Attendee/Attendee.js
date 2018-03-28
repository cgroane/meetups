import React from 'react';
import './Attendee.css';

const Attendee = (props) => {
    var formattedTime = new Date(props.date).toString()
    return (
        <div className="flex-r attendee grid-item" >
            <img src={props.photo} />
            <div>
                <h2>{props.name}</h2>
                <span>{
                        formattedTime
                    }</span>
            </div>
        </div>
    )
}
export default Attendee;