import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import RSVPCard from './../../CardComponents/RSVPCard/RSVPCard';

const RSVPList = (props) => {
    return (
        <div>
            {props.attendees.map((cur, ind, arr) => 
                <RSVPCard name={cur.name} key={ind} selectPlace={props.selectPlace} removePlace={props.removePlace} id={cur.id} />
            )}
        </div>
    )
}
export default RSVPList;