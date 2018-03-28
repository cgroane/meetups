import React from 'react';
import RSVPCard from './../../CardComponents/RSVPCard/RSVPCard';

const RSVPList = (props) => {
    if (props.attendees) {
        var places = props.attendees.map((cur, ind, arr) => <RSVPCard name={cur.name} key={ind} selectPlace={props.selectPlace} id={cur.place_id} />)
    } else {
        var places = null
    }
    return (
        <div>
            {places}
        </div>
    )
}
export default RSVPList;