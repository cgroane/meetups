import React from 'react';
import RSVPCard from './../../CardComponents/RSVPCard/RSVPCard';

const RSVPList = (props) => {
    return (
        <div>
            {props.attendees.map((cur, ind, arr) => 
                <RSVPCard name={cur.name} key={ind} selectPlace={props.selectPlace} id={cur.place_id} />
            )}
        </div>
    )
}
export default RSVPList;