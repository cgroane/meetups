import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const RSVPCard = (props) => {
    return (
        <div key={props.ind} >
            {props.name}
        </div>
    )
}

export default RSVPCard;