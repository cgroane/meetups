import React from 'react';
import Card from './../../CardComponents/Card/Card';

const List = (props) => {
    if (props.data) {
        var places = props.data.map((cur, ind, arr) => <Card name={cur.name} key={ind} selectPlace={props.selectPlace} id={cur.place_id} selected={props.selectedPlaces} />)
    } else {
        var places = null
    }
    return (
        <div>
            {places}
        </div>
    )
}
export default List;