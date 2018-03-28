import React from 'react';
import Card from './../../CardComponents/Card/Card';

const List = (props) => {
    if (props.data) {
        var places = props.data.map((cur, ind, arr) => <Card name={cur.name} key={ind} selectPlace={props.selectPlace} id={cur.place_id} selected={props.selectedPlaces} phone={cur.formatted_phone_number ? cur.formatted_phone_number: null} />)
    } else {
        var places = null
    }
    return (
        <div className="" >
            {places}
        </div>
    )
}
export default List;