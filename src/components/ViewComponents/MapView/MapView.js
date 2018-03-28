// list on left should be list of places generated by google places API
// right should show locations of those on a map with markers

import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// import components
import List from './../../ListComponents/List/List';

// import functions
import {getEventInfo, getPlaces, selectPlace, removePlace} from './../../../ducks/reducer';
import googleMapsService from './../../../utility/googleMapsService';

// import css
import './MapView.css';


class MapView extends Component {

    componentDidMount() {
        // init map
        this.props.getEventInfo().then(() => this.props.getPlaces({
                location: {
                    lat: this.props.reactEvent.venue.lat,
                    lng: this.props.reactEvent.venue.lon
                },
                meters: 16000,
                type: 'accounting'
            })
        )
        .then(() => googleMapsService.initMap.call(this, this.gmap, this.props.reactEvent, this.props.places))
        
    }
    componentDidUpdate() {
        // create markers
        // googleMapsService.initMap.call(this, this.gmap, this.props.reactEvent, this.props.places);    
    }

    handleAdd = (place) => {
        if (!this.props.selectedPlaces.find(x => x.place_id == place)) {
            axios.get(`/api/places/${place}`).then((response) => this.props.selectPlace(response.data))
        } else {
            alert('Already added, removing from list')
            this.props.removePlace(place)
        }
    }

    handleSearch = (placeType) => {
        this.props.getPlaces({
            location: {
                lat: this.props.reactEvent.venue.lat,
                lng: this.props.reactEvent.venue.lon,
            },
            meters: 16000,
            type: placeType
        })
        .then(() => googleMapsService.initMap.call(this, this.gmap, this.props.reactEvent, this.props.places));
    }

    render() {
        var places = <List data={this.props.places} selectPlace={this.handleAdd} selected={this.props.selectedPlaces} />
        return (
            <div className="container shift-down height-less-nav" >
                <div id="gmap" ref={ref => (this.gmap = ref)} className="height-less-nav" />
                <div className="below-nav flex-r update-places" >
                    <span>Choose some different places:</span><select type="dropdown" onChange={(e) => this.handleSearch(e.target.value)} >
                        {
                            googleMapsService.googlePlacesTypes.map((cur, ind, arr) => <option key={ind} value={cur.FeatureType} >{cur.display}</option>)
                        }
                    </select>
                </div>
                <div className="list-grid height-less-nav" >
                {
                    this.props.places ? places
                    :
                    null
                }
                
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {getEventInfo, getPlaces, selectPlace, removePlace}) (MapView);