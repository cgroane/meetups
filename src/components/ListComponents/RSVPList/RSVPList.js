import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import RSVPCard from './../../CardComponents/RSVPCard/RSVPCard';

const RSVPList = ({attendees}) => {
    return (
        <div>
            {attendees.map((cur, ind, arr) => 
                <RSVPCard name={cur.member.name} key={ind} />
            )}
        </div>
    )
}
export default RSVPList;