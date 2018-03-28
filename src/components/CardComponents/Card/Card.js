import React from 'react';

import FontAwesome from 'react-fontawesome';

import './Card.css';

const Card = (props) => {
    if (props.selected) {
        if (props.selected.find(x => x.place_id == props.id)) {
            var heartStyle = {
                color: 'pink'
            }
        } else {
            var heartStyle = {
                color: 'black'
            }
        }
    }
    
    return (
        <div key={props.ind} className="grid-item" >
            <div className="flex-r grid-item-text" >
                <h2 onClick={ () => props.selectPlace(props.id)} >{props.name}</h2>
                <FontAwesome name="heart" onClick={() => props.selectPlace(props.id)} style={heartStyle} className="heart" size="2x" />
            </div>
            <a href={`tel:${props.phone}`} >
                {props.phone ? props.phone : null}
            </a>
        </div>
    )
}

export default Card;