import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const RSVPCard = (props) => {
    return (
        <div key={props.ind} >
            <div onClick={() => props.selectPlace(props.id)} >{props.name}</div>
            <span onClick={() => props.removePlace(props.id)} >X</span>
        </div>
    )
}

export default RSVPCard;