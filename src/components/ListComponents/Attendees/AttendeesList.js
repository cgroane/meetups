import React from 'react';
import Attendee from './../../CardComponents/Attendee/Attendee';
import './AttendeesList.css';

const AttendeesList = (props) => {
    return (
        props.data.map((cur, ind, arr) => <Attendee name={cur.member.name} photo={cur.member.photo.highres_link} date={cur.created} key={ind}/>)
    )
}
export default AttendeesList;